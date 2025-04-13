import { Destination, Spawner } from "../buildings";
import { Toolbar } from "../control/toolbar";
import { GameEventHandler } from "../game-events";
import { Car } from "../map";
import { RandomUtils } from "./random.utils";

export class GameCleanupUtils {
   // TODO: remove static parts
   public static cleanUp(): void {
      Spawner["list"].splice(0);
      Destination["list"].splice(0);
      Toolbar["instance"].set(null);
      Car["pool"].splice(0);
      RandomUtils["random"] = undefined;
      GameEventHandler.clean();
   }
}
