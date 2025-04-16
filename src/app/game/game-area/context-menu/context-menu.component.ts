import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, Type } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Building } from '@rainy-days/game/core/buildings';
import { GameEventHandler, GameEventType } from '@rainy-days/game/core/game-events';
import { Tile } from '@rainy-days/game/core/map';
import { filter, fromEvent, map } from 'rxjs';
import { contextMenuMap } from './context-menu-map';
import { ContextMenuService } from './context-menu.service';

@Component({
   selector: 'rd-context-menu',
   templateUrl: './context-menu.component.html',
   styleUrl: './context-menu.component.scss',
   imports: [NgComponentOutlet],
   providers: [ContextMenuService],
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      "[style.left.px]": "xPos()",
      "[style.top.px]": "yPos()",
      "[style.visibility]": "contextMenuBuilding() ? 'visible' : 'hidden'"
   }
})
export class ContextMenuComponent {
   private readonly elementRef = inject(ElementRef);

   public readonly contextMenuBuilding = input<Building>();

   public readonly contextMenuComponent = computed<Type<any> | null>(() => {
      const [contextMenuType, contextMenuData] =
         Object.entries(contextMenuMap).find(([_, data]) => this.contextMenuBuilding() instanceof data.buildingType) ?? [];
      if (contextMenuType === undefined || contextMenuData === undefined) {
         return null;
      }

      return contextMenuData.component;
   });

   public readonly xPos = computed(() => {
      const building = this.contextMenuBuilding();
      if (!building) {
         return 0;
      }

      const tileX = building.tile.x * Tile.SIZE;
      return tileX;
   });

   public readonly yPos = computed(() => {
      const building = this.contextMenuBuilding();
      if (!building) {
         return 0;
      }

      const tileY = building.tile.y * Tile.SIZE;
      return tileY;
   });

   constructor() {
      fromEvent<MouseEvent>(document, "mousedown").pipe(
         takeUntilDestroyed(),
         map(event => event.target),
         filter(target => target instanceof HTMLElement),
         filter(element => !this.isChildOfThis(element))
      ).subscribe(() => GameEventHandler.getInstance().emitEvent(GameEventType.CLOSE_CONTEXT_MENU, null));
   }

   private isChildOfThis(element: HTMLElement | null): boolean {
      if (!element || element === document.body) {
         return false;
      }
      if (element === this.elementRef.nativeElement) {
         return true;
      }
      return this.isChildOfThis(element.parentElement);
   }
}
