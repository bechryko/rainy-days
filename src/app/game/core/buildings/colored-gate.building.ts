import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Car } from '../map/car';
import { ColorUtils, SystemColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Gate } from './gate';

export class ColoredGate extends Gate {
   constructor(
      tile: Tile,
      public readonly color: string
   ) {
      super(tile);
   }

   public override isOccupyingFor(car: Car): boolean {
      return car.color === this.color;
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.square(
         ConstantUtils.unit(this.tile.x + 0.25),
         ConstantUtils.unit(this.tile.y + 0.25),
         ConstantUtils.unit(0.5),
         ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE)
      );
      drawer.square(
         ConstantUtils.unit(this.tile.x + 0.3),
         ConstantUtils.unit(this.tile.y + 0.3),
         ConstantUtils.unit(0.4),
         this.color
      );
   }
}
