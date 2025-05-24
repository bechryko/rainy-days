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

   public override drawRoadSegment(drawer: BasicDrawer, x1: number, y1: number, x2: number, y2: number): void {
      drawer.strokeStyle = ColorUtils.getTokenValue(ComponentColorToken.TUBE_OUTLINE);
      drawer.line(x1, y1, x2, y2, Tile.SIZE / 2);

      drawer.strokeStyle = ColorUtils.getTokenValue(ComponentColorToken.TUBE);
      drawer.line(x1, y1, x2, y2, Tile.SIZE / 2.5);
   }

   public override getName(): string {
      return 'Tube';
   }
}
