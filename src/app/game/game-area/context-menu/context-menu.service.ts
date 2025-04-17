import { Injectable } from '@angular/core';
import { TimedPauseBuilding } from '@rainy-days/game/core/buildings/models';
import { GameEventHandler, GameEventType } from '@rainy-days/game/core/game-events';

@Injectable()
export class ContextMenuService {
   private timedPauseBuilding?: TimedPauseBuilding;

   constructor() {
      GameEventHandler.getInstance().watchEvents(GameEventType.COMPLETE_TIMED_PAUSE, () => (this.timedPauseBuilding = undefined));
   }

   public setTimedPauseBuilding(building: TimedPauseBuilding): void {
      if (this.hasOtherBuildingTimedPause(building)) {
         this.clearTimedPauseBuilding(this.timedPauseBuilding!);
      }

      this.timedPauseBuilding = building;
      building.timedPause = true;
   }

   public clearTimedPauseBuilding(building: TimedPauseBuilding): void {
      this.timedPauseBuilding = undefined;
      building.timedPause = false;
   }

   public hasOtherBuildingTimedPause(building: TimedPauseBuilding): boolean {
      return Boolean(this.timedPauseBuilding) && this.timedPauseBuilding !== building;
   }
}
