import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { ColorUtils, ComponentColorToken } from '../map/utils';
import { Road } from './road';

export class BasicRoad extends Road {
   public override matchTypeWith(other: Road): boolean {
      return other instanceof BasicRoad;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.BASIC_ROAD), Tile.SIZE / 2);
   }
}
