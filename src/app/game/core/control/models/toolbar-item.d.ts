import { Building } from "../../buildings";
import { Tile } from "../../map";
import { Road } from "../../roads";
import { Selection } from "./selection";

export interface ToolbarItem {
   displayName: string;
   selection: Selection;
   factory: (tile: Tile) => Building | Road | null;
   selectionMatchFn: (obj: Building | Road) => boolean;
}
