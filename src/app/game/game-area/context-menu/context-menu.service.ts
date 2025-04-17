import { Injectable } from '@angular/core';
import { DelayedPauseBuilding } from '@rainy-days/game/core/buildings/models';
import { GameEventHandler, GameEventType } from '@rainy-days/game/core/game-events';

@Injectable()
export class ContextMenuService {
   private timedPauseBuilding?: DelayedPauseBuilding;

   constructor() {
      GameEventHandler.getInstance().watchEvents(GameEventType.COMPLETE_TIMED_PAUSE, () => (this.timedPauseBuilding = undefined));
   }

   public setTimedPauseBuilding(building: DelayedPauseBuilding): void {
      if (this.hasOtherBuildingTimedPause(building)) {
         this.clearTimedPauseBuilding(this.timedPauseBuilding!);
      }

      this.timedPauseBuilding = building;
      building.timedPause = true;
   }

   public clearTimedPauseBuilding(building: DelayedPauseBuilding): void {
      this.timedPauseBuilding = undefined;
      building.timedPause = false;
   }

   public hasOtherBuildingTimedPause(building: DelayedPauseBuilding): boolean {
      return Boolean(this.timedPauseBuilding) && this.timedPauseBuilding !== building;
   }
}
