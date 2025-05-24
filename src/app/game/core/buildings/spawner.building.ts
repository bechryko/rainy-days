import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { BasicDrawer } from '../drawing';
import { toFraction, transparent } from '../functions';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { Car } from '../map/car';
import { ColorUtils, DirectionUtils, SystemColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Building } from './building';
import { TimedPauseBuilding } from './models';

export class Spawner extends Building implements TimedPauseBuilding {
   private static readonly CAR_SPAWN_TIMER = 4;

   private timer = 0;
   private readonly _displayTimer$ = new BehaviorSubject(toFraction(this.timer));
   private carsSpawned = 0;
   private readonly _displayCarsSpawned$ = new BehaviorSubject(this.carsSpawned);

   public timedPause = false;

   constructor(
      tile: Tile,
      private readonly color: string
   ) {
      super(tile);
   }

   public override isSpawned(): boolean {
      return true;
   }

   public tick(deltaTime: number): void {
      if (!this.tile.hasRoad()) {
         return;
      }

      this.timer -= deltaTime;
      if (this.timer < 0) {
         this.spawnCar();
         this.timer = Spawner.CAR_SPAWN_TIMER;
      }

      this.emit();
   }

   public delaySpawn(delay: number): void {
      this.timer += delay;
      this.emit();
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.lineWidth = 2;

      const drawX = ConstantUtils.unit(this.tile.x + 0.5);
      const drawY = ConstantUtils.unit(this.tile.y + 0.5);

      if (this.tile.selected) {
         drawer.circle(
            drawX,
            drawY,
            ConstantUtils.unit(0.75),
            drawer.createRadialGradient(drawX, drawY, ConstantUtils.unit(0.5), [0.5, this.color], [1, transparent()])
         );
      }

      drawer.circle(drawX, drawY, ConstantUtils.unit(0.25), this.color);
      drawer.circle(
         drawX,
         drawY,
         ConstantUtils.unit(0.25),
         ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE),
         false
      );
      drawer.text(Math.ceil(this.timer) + 's', drawX, drawY, ConstantUtils.unit(0.35));
   }

   public get displayTimer$(): Observable<string> {
      return this._displayTimer$.pipe(distinctUntilChanged());
   }

   public get displayCarsSpawned$(): Observable<number> {
      return this._displayCarsSpawned$.asObservable();
   }

   private spawnCar(): void {
      const car = new Car(this.tile, this.color);

      DirectionUtils.forEachDirection((direction, _x, _y, breakFn) => {
         const neighbor = this.tile.getTileInDirection(direction);
         if (neighbor && neighbor.isUnlocked(car, this.tile)) {
            car.setDestinationIn(direction);
            breakFn();
         }
      });

      if (this.timedPause) {
         GameEventHandler.getInstance().emitEvent(GameEventType.TOGGLE_PAUSE, null);
         GameEventHandler.getInstance().emitEvent(GameEventType.COMPLETE_TIMED_PAUSE, null);
         this.timedPause = false;
      }

      this.carsSpawned++;
      this._displayCarsSpawned$.next(this.carsSpawned);
   }

   private emit(): void {
      this._displayTimer$.next(toFraction(this.timer));
   }
}
