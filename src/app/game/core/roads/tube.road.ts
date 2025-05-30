import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { ColorUtils, ComponentColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Road } from './road';

export class Tube extends Road {
   constructor(tile: Tile) {
      super(tile, true);
   }

   public override matchTypeWith(other: Road): boolean {
      return other instanceof Tube;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.TUBE_OUTLINE), ConstantUtils.unit(0.5));
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.TUBE), ConstantUtils.unit(0.4));
   }

   public override drawRoadSegment(drawer: BasicDrawer, x1: number, y1: number, x2: number, y2: number): void {
      drawer.strokeStyle = ColorUtils.getTokenValue(ComponentColorToken.TUBE_OUTLINE);
      drawer.line(x1, y1, x2, y2, ConstantUtils.unit(0.5));

      drawer.strokeStyle = ColorUtils.getTokenValue(ComponentColorToken.TUBE);
      drawer.line(x1, y1, x2, y2, ConstantUtils.unit(0.4));
   }

   public override getName(): string {
      return 'Tube';
   }
}
