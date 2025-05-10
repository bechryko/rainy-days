import { ChangeDetectionStrategy, Component, computed, ElementRef, input, viewChild } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { Building, TimedGate } from '@rainy-days/game/core/buildings';
import { Selection, ToolbarItem } from '@rainy-days/game/core/control/models';
import { BasicDrawer } from '@rainy-days/game/core/drawing';
import { Tile } from '@rainy-days/game/core/map';
import { Direction } from '@rainy-days/game/core/map/models';
import { Road } from '@rainy-days/game/core/roads';
import { filter, map, switchMap } from 'rxjs';

@Component({
   selector: 'rd-toolbar-icon',
   imports: [MatIconModule],
   templateUrl: './toolbar-icon.component.html',
   styleUrl: './toolbar-icon.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarIconComponent {
   public readonly item = input.required<ToolbarItem>();
   public readonly isEditorTool = computed(() => this.item().selection === Selection.EDITOR_TOOL);
   public readonly iconCanvas = viewChild<ElementRef<HTMLCanvasElement>>('iconCanvas');

   constructor() {
      const iconCanvas$ = toObservable(this.iconCanvas);

      toObservable(this.item)
         .pipe(
            switchMap(toolbarItem =>
               iconCanvas$.pipe(
                  filter(Boolean),
                  map(canvas => {
                     if (toolbarItem.selection === Selection.ROAD || toolbarItem.selection === Selection.TUBE) {
                        const buildings = [
                           toolbarItem.factory(this.createMockTile(0, 0.5))!,
                           toolbarItem.factory(this.createMockTile(1, 0.5))!
                        ];
                        return [buildings, canvas.nativeElement] as const;
                     }
                     return [[toolbarItem.factory(this.createMockTile())!], canvas.nativeElement] as const;
                  })
               )
            ),
            takeUntilDestroyed()
         )
         .subscribe(([buildings, canvas]) => {
            this.initCanvas(canvas, buildings.length);
            const drawer = new BasicDrawer(canvas);
            buildings.forEach(building => {
               this.initBuilding(building);
               building.draw(drawer);
            });
         });
   }

   private initCanvas(canvas: HTMLCanvasElement, widthInTiles: number): void {
      canvas.height = canvas.width = Tile.SIZE * widthInTiles;
   }

   private initBuilding(building: Building | Road): void {
      if (building instanceof TimedGate) {
         building.switch();
      }
   }

   private createMockTile(x = 0, y = 0): Tile {
      return {
         x,
         y,
         isConnectedWithRoad: (direction: Direction) =>
            (direction === Direction.RIGHT && x === 0) || (direction === Direction.LEFT && x === 1)
      } as Tile;
   }
}
