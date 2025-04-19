import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { ColorUtils, ComponentColorToken } from '../map/utils';
import { Road } from './road';

export class Tube extends Road {
   public override matchTypeWith(other: Road): boolean {
      return other instanceof Tube;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.TUBE_OUTLINE), Tile.SIZE / 2);
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.TUBE), Tile.SIZE / 2.5);
   }
}
