import { BasicDrawer } from "../drawing";
import { Tile } from "../map";
import { Road } from "./road";

export class BasicRoad extends Road {
   public override matchTypeWith(other: Road): boolean {
      return other instanceof BasicRoad;
   }

   public override draw(drawer: BasicDrawer): void {
      this.drawRoadBase(drawer, "black", Tile.SIZE / 2);
   }
}
