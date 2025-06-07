import { BasicDrawer } from '../drawing';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { ColorUtils, SystemColorToken } from '../map/utils';
import { EventListener } from '../models';
import { ConstantUtils } from '../utils';
import { Selection } from './models';
import { Toolbar } from './toolbar';

export class Controller {
   private static readonly ROAD_CONNECTION_PREVIEW_ALPHA = 0.4;

   private _selectedTile?: Tile;
   private leftMouseDown: boolean = false;
   private rightMouseDown: boolean = false;
   private readonly toolbar = new Toolbar();
   private readonly eventListeners: EventListener<any>[] = [];

   private roadConnectionBase?: Tile;
   private readonly cursor = { x: 0, y: 0 };

   constructor(private readonly tiles: Tile[][]) {}

   public registerEventListeners(): void {
      this.eventListeners.push(
         new EventListener('mousedown', event => {
            if (event.button === 0) {
               this.onLeftMouseDown(event);
            } else {
               this.onRightMouseDown(event);
            }
         })
      );

      this.eventListeners.push(
         new EventListener('mouseup', event => {
            if (event.button === 0) {
               this.onLeftMouseUp(event);
            } else {
               this.onRightMouseUp(event);
            }
         })
      );
      this.eventListeners.push(new EventListener('mousemove', this.onMouseMove.bind(this)));

      this.eventListeners.push(new EventListener('keypress', this.onKeyDown.bind(this)));

      this.eventListeners.push(
         new EventListener('wheel', event => {
            if (event.deltaY < 0) {
               this.onScrollUp(event);
            } else if (event.deltaY > 0) {
               this.onScrollDown(event);
            }
         })
      );
   }

   public unregisterEventListeners(): void {
      this.eventListeners.forEach(listener => listener.destroy());
   }

   public handleMouseActions(): void {
      if (this.selectedTile) {
         if (this.leftMouseDown) {
            this.leftMouseAction();
         } else if (this.rightMouseDown) {
            this.rightMouseAction();
         }
      }
   }

   public leftMouseAction(): void {
      if (!this.selectedTile) {
         return;
      }
      const building = this.toolbar.createBuildingFromSelection(this.selectedTile);
      if (building) {
         this.selectedTile.build(building);
      } else if (this.toolbar.selection == Selection.EDITOR_TOOL && this.selectedTile.hasRoad()) {
         if (this.roadConnectionBase && this.roadConnectionBase !== this.selectedTile) {
            this.selectedTile.connectRoadTo(this.roadConnectionBase);
            this.roadConnectionBase = this.selectedTile;
         }
      }
   }

   public rightMouseAction(): void {
      if (this.toolbar.selection === Selection.EDITOR_TOOL) {
         this.selectedTile!.openContextMenu();
      } else {
         this.selectedTile!.deleteBuilding(this.toolbar);
      }
   }

   public draw(drawer: BasicDrawer): void {
      if (this.roadConnectionBase) {
         const roadTileX = ConstantUtils.unit(this.roadConnectionBase.x + 0.5);
         const roadTileY = ConstantUtils.unit(this.roadConnectionBase.y + 0.5);
         const distance = Math.sqrt((roadTileX - this.cursor.x) ** 2 + (roadTileY - this.cursor.y) ** 2);

         drawer.alpha = Controller.ROAD_CONNECTION_PREVIEW_ALPHA;
         this.roadConnectionBase.road!.drawRoadSegment(drawer, roadTileX, roadTileY, this.cursor.x, this.cursor.y);
         drawer.alpha = 1;

         if (distance > ConstantUtils.unit(2)) {
            drawer.text(
               '!',
               (roadTileX + this.cursor.x) / 2,
               (roadTileY + this.cursor.y) / 2,
               ConstantUtils.unit(1.5),
               ColorUtils.getTokenValue(SystemColorToken.WARN)
            );
         }
      }
   }

   private onLeftMouseDown(_: MouseEvent): void {
      this.leftMouseDown = true;

      if (this.toolbar.selection === Selection.EDITOR_TOOL && this.selectedTile && this.selectedTile.hasRoad()) {
         this.roadConnectionBase = this.selectedTile;
      }
   }

   private onRightMouseDown(_: MouseEvent): void {
      this.rightMouseDown = true;
   }

   private onLeftMouseUp(_: MouseEvent): void {
      this.leftMouseDown = false;

      if (this.toolbar.selection === Selection.EDITOR_TOOL && this.roadConnectionBase) {
         this.roadConnectionBase = undefined;
      }
   }

   private onRightMouseUp(_: MouseEvent): void {
      this.rightMouseDown = false;
   }

   private onMouseMove(event: MouseEvent): void {
      this.cursor.x = event.offsetX;
      this.cursor.y = event.offsetY;

      if (!(event.target instanceof HTMLCanvasElement)) {
         this.selectedTile = undefined;
         return;
      }

      const x = Math.floor(event.offsetX / ConstantUtils.unit());
      const y = Math.floor(event.offsetY / ConstantUtils.unit());
      if (x < 0 || x >= ConstantUtils.COLUMN_COUNT || y < 0 || y >= ConstantUtils.ROW_COUNT) {
         this.selectedTile = undefined;
         return;
      }

      this.selectedTile = this.tiles[x][y];
   }

   private onKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Space') {
         GameEventHandler.getInstance().emitEvent(GameEventType.TOGGLE_PAUSE, null);
         return;
      }

      const numberKey = Number(event.key);
      if (Number.isNaN(numberKey)) {
         return;
      }
      if (this.toolbar.selection === Selection.EDITOR_TOOL && this.roadConnectionBase) {
         this.roadConnectionBase = undefined;
      }
      this.toolbar.selectItemByKey(numberKey);
   }

   private onScrollDown(_: WheelEvent): void {
      this.toolbar.stepSelectedItem(1);
   }

   private onScrollUp(_: WheelEvent): void {
      this.toolbar.stepSelectedItem(-1);
   }

   private set selectedTile(tile: Tile | undefined) {
      this.setTileSelection(this._selectedTile, false);
      this._selectedTile = tile;
      this.setTileSelection(this._selectedTile, true);
   }

   private get selectedTile(): Tile | undefined {
      return this._selectedTile;
   }

   private setTileSelection(tile: Tile | undefined, isSelected: boolean): void {
      if (tile) {
         tile.selected = isSelected;
      }
   }
}
