import { Type } from '@angular/core';
import { Spawner } from '@rainy-days/game/core/buildings';
import { ContextMenuType } from './context-menu-type';
import { SpawnerContextMenuComponent } from './spawner-context-menu/spawner-context-menu.component';

interface ContextMenuTypeData {
   component: Type<any>;
   buildingType: Type<any>;
}

export const contextMenuMap: Record<ContextMenuType, ContextMenuTypeData> = {
   [ContextMenuType.SPAWNER]: {
      component: SpawnerContextMenuComponent,
      buildingType: Spawner
   }
};
