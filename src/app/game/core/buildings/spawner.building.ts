import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Car } from '../map/car';
import { Color } from '../map/models';
import { DirectionUtils } from '../map/utils';
import { Building } from './building';

export class Spawner extends Building {
   public static readonly GENERAL_CAR_SPAWN_TIMER = 4;

   private timer = 0;

   constructor(
      tile: Tile,
      private readonly color: Color
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
      }
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.lineWidth = 2;

      drawer.circle((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE / 4, this.color);
      drawer.circle(
         (this.tile.x + 0.5) * Tile.SIZE,
         (this.tile.y + 0.5) * Tile.SIZE,
         Tile.SIZE / 4,
         'black',
         false
      );
      drawer.text(Math.ceil(this.timer) + 's', (this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE * 0.35);
   }
}
