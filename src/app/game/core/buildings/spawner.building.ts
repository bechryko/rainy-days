import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { BasicDrawer } from '../drawing';
import { toFraction } from '../functions';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { Car } from '../map/car';
import { ColorUtils, DirectionUtils, SystemColorToken } from '../map/utils';
import { Building } from './building';
import { TimedPauseBuilding } from './models';

export class Spawner extends Building implements TimedPauseBuilding {
   public static readonly GENERAL_CAR_SPAWN_TIMER = 4;

   private timer = 0;
   private readonly _displayTimer$ = new BehaviorSubject(toFraction(this.timer));
   public timedPause = false;

   constructor(
      tile: Tile,
      private readonly color: string
   ) {
      super(tile, false);
   }

   public tick(deltaTime: number): void {
      if (!this.tile.hasRoad()) {
         return;
      }

      this.timer -= deltaTime;
      if (this.timer < 0) {
         this.timer = Spawner.GENERAL_CAR_SPAWN_TIMER;
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
      }

      this.emit();
   }

   public delaySpawn(delay: number): void {
      this.timer += delay;
      this.emit();
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.lineWidth = 2;

      drawer.circle((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE / 4, this.color);
      drawer.circle(
         (this.tile.x + 0.5) * Tile.SIZE,
         (this.tile.y + 0.5) * Tile.SIZE,
         Tile.SIZE / 4,
         ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE),
         false
      );
      drawer.text(
         Math.ceil(this.timer) + 's',
         (this.tile.x + 0.5) * Tile.SIZE,
         (this.tile.y + 0.5) * Tile.SIZE,
         Tile.SIZE * 0.35
      );
   }

   public get displayTimer$(): Observable<string> {
      return this._displayTimer$.pipe(distinctUntilChanged());
   }

   private emit(): void {
      this._displayTimer$.next(toFraction(this.timer));
   }
}
