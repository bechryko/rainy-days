import { BehaviorSubject, Observable } from 'rxjs';
import { BasicDrawer } from '../drawing';
import { transparent } from '../functions';
import { GameEventHandler, GameEventType } from '../game-events';
import { Car, Tile } from '../map';
import { ColorUtils, SystemColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Building } from './building';

export class Destination extends Building {
   private static readonly list: Destination[] = [];

   private static readonly STARTING_HEALTH = 45;
   private static readonly HEALTH_INCREASE = 1;
   private static readonly HEALING_PER_CAR = 5;
   private static readonly CRITICAL_HEALTH = 15;

   private static CURRENT_HEALTH = Destination.STARTING_HEALTH;

   public static anyWithZeroHealth(): boolean {
      return Destination.list.some(destination => destination.health <= 0);
   }

   private carsReached = 0;
   private readonly _displayCarsReached$ = new BehaviorSubject(this.carsReached);

   private health: number;

   constructor(
      tile: Tile,
      public readonly color: string
   ) {
      super(tile);

      this.health = Destination.CURRENT_HEALTH;
      Destination.CURRENT_HEALTH += Destination.HEALTH_INCREASE;
      Destination.list.push(this);
   }

   public override isSpawned(): boolean {
      return true;
   }

   public override onCarMove(car: Car): void {
      if (this.color === car.color) {
         this.health += Destination.HEALING_PER_CAR;

         this.carsReached++;
         this._displayCarsReached$.next(this.carsReached);

         car.destroy(); //TODO: object pool
         GameEventHandler.getInstance().emitEvent(GameEventType.GAIN_SCORE, null);
      }
   }

   public tick(deltaTime: number): void {
      const oldHealth = this.health;
      this.health -= deltaTime;

      if (this.health < Destination.CRITICAL_HEALTH && oldHealth >= Destination.CRITICAL_HEALTH) {
         GameEventHandler.getInstance().emitEvent(
            GameEventType.DESTINATION_CRITICAL_HEALTH,
            Destination.CRITICAL_HEALTH
         );
      }
   }

   public override draw(drawer: BasicDrawer): void {
      const drawX = ConstantUtils.unit(this.tile.x + 0.5);
      const drawY = ConstantUtils.unit(this.tile.y + 0.5);

      if (this.tile.selected) {
         drawer.circle(
            drawX,
            drawY,
            ConstantUtils.unit(),
            drawer.createRadialGradient(drawX, drawY, ConstantUtils.unit(0.75), [0.5, this.color], [1, transparent()])
         );
      }

      drawer.circle(drawX, drawY, ConstantUtils.unit(0.5), ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE));
      drawer.circle(drawX, drawY, ConstantUtils.unit(0.45), this.color);
      drawer.text(Math.ceil(this.health) + 's', drawX, drawY, ConstantUtils.unit(0.45));
   }

   public get displayCarsReached$(): Observable<number> {
      return this._displayCarsReached$.asObservable();
   }
}
