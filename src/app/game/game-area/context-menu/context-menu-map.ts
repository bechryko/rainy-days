import { Type } from '@angular/core';
import { Destination, Spawner, TimedGate } from '@rainy-days/core/buildings';
import { ContextMenuType } from './context-menu-type';
import { DestinationContextMenuComponent } from './destination-context-menu/destination-context-menu.component';
import { SpawnerContextMenuComponent } from './spawner-context-menu/spawner-context-menu.component';
import { TimedGateContextMenuComponent } from './timed-gate-context-menu/timed-gate-context-menu.component';

interface ContextMenuTypeData {
   component: Type<any>;
   buildingType: Type<any>;
}

export const contextMenuMap: Record<ContextMenuType, ContextMenuTypeData> = {
   [ContextMenuType.SPAWNER]: {
      component: SpawnerContextMenuComponent,
      buildingType: Spawner
   },
   [ContextMenuType.TIMED_GATE]: {
      component: TimedGateContextMenuComponent,
      buildingType: TimedGate
   },
   [ContextMenuType.DESTINATION]: {
      component: DestinationContextMenuComponent,
      buildingType: Destination
   }
};
