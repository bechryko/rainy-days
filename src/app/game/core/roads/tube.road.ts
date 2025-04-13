import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Road } from './road';

export class Tube extends Road {
   public override matchTypeWith(other: Road): boolean {
      return other instanceof Tube;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, 'black', Tile.SIZE / 2);
      this.drawRoadBase(drawer, 'grey', Tile.SIZE / 2.5);
   }
}
