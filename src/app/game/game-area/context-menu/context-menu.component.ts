import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, Type } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Building } from '@rainy-days/core/buildings';
import { GameEventHandler, GameEventType } from '@rainy-days/core/game-events';
import { Tile } from '@rainy-days/core/map';
import { ResizeUtils } from '@rainy-days/core/map/utils';
import { ConstantUtils } from '@rainy-days/core/utils';
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
      '[style.left]': 'xPos()',
      '[style.top.px]': 'yPosPx()',
      '[style.width.rem]': 'widthRem',
      '[class.visible]': 'contextMenuBuilding() && contextMenuComponent()',
      '[class.is-on-bottom]': 'isOnBottom()'
   }
})
export class ContextMenuComponent {
   private readonly elementRef = inject(ElementRef);

   public readonly widthRem = 18;
   public readonly contextMenuBuilding = input<Building>();

   public readonly contextMenuComponent = computed<Type<any> | null>(() => {
      const [contextMenuType, contextMenuData] =
         Object.entries(contextMenuMap).find(([_, data]) => this.contextMenuBuilding() instanceof data.buildingType) ??
         [];
      if (contextMenuType === undefined || contextMenuData === undefined) {
         return null;
      }

      return contextMenuData.component;
   });

   public readonly isOnBottom = computed(() => {
      const building = this.contextMenuBuilding();
      if (!building) {
         return false;
      }

      return this.calcIsOnBottom(building);
   });

   public readonly xPos = computed(() => {
      const building = this.contextMenuBuilding();
      if (!building) {
         return '0px';
      }

      const isOnLeft = this.calcIsOnLeft(building);
      const displayedTileX = building.tile.x + (isOnLeft ? 2 : -1);
      const clampedDisplayedTileX = Math.min(ConstantUtils.COLUMN_COUNT, Math.max(0, displayedTileX));
      const x =
         clampedDisplayedTileX * Tile.SIZE + (isOnLeft ? -ResizeUtils.remToPx(ResizeUtils.CANVAS_BORDER_WIDTH_REM) : 0);
      if (isOnLeft) {
         return `calc(${x}px - ${this.widthRem}rem)`;
      }
      return `${x}px`;
   });

   public readonly yPosPx = computed(() => {
      const building = this.contextMenuBuilding();
      if (!building) {
         return 0;
      }

      const tilesWidth = building.tile.y * Tile.SIZE;
      return (
         tilesWidth +
         ResizeUtils.remToPx(ResizeUtils.CANVAS_BORDER_WIDTH_REM) +
         (this.calcIsOnBottom(building) ? Tile.SIZE : 0)
      );
   });

   constructor() {
      fromEvent<MouseEvent>(document, 'mousedown')
         .pipe(
            takeUntilDestroyed(),
            map(event => event.target),
            filter(target => target instanceof HTMLElement),
            filter(element => !this.isChildOfThis(element))
         )
         .subscribe(() => GameEventHandler.getInstance().emitEvent(GameEventType.CLOSE_CONTEXT_MENU, null));
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

   private calcIsOnBottom(building: Building): boolean {
      return building.tile.y < ConstantUtils.ROW_COUNT / 2;
   }

   private calcIsOnLeft(building: Building): boolean {
      return building.tile.x > ConstantUtils.COLUMN_COUNT / 2;
   }
}
