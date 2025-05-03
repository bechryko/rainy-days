import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Car } from '../map/car';
import { ColorUtils, SystemColorToken } from '../map/utils';
import { Gate } from './gate';

export class ColoredGate extends Gate {
   constructor(
      tile: Tile,
      public readonly color: string
   ) {
      super(tile);
   }

   public doesLetPass(car: Car): boolean {
      return car.color != this.color;
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.square(
         (this.tile.x + 0.25) * Tile.SIZE,
         (this.tile.y + 0.25) * Tile.SIZE,
         Tile.SIZE / 2,
         ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE)
      );
      drawer.square((this.tile.x + 0.3) * Tile.SIZE, (this.tile.y + 0.3) * Tile.SIZE, Tile.SIZE * 0.4, this.color);
   }
}
