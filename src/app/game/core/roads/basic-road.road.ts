import { BasicDrawer } from '../drawing';
import { ColorUtils, ComponentColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Road } from './road';

export class BasicRoad extends Road {
   public override matchTypeWith(other: Road): boolean {
      return other instanceof BasicRoad;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, ColorUtils.getTokenValue(ComponentColorToken.BASIC_ROAD), ConstantUtils.unit(0.5));
   }

   public override drawRoadSegment(drawer: BasicDrawer, x1: number, y1: number, x2: number, y2: number): void {
      drawer.strokeStyle = ColorUtils.getTokenValue(ComponentColorToken.BASIC_ROAD);
      drawer.line(x1, y1, x2, y2, ConstantUtils.unit(0.5));
   }

   public override getName(): string {
      return 'Basic road';
   }
}
