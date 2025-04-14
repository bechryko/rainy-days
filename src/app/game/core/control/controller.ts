import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { Map } from '../map/map';
import { EventListener } from '../models';
import { Selection } from './models';
import { Toolbar } from './toolbar';

export class Controller {
   private selectedTile?: Tile;
   private leftMouseDown: boolean = false;
   private rightMouseDown: boolean = false;
   private selectedTool = Selection.EDITOR_TOOL;
   private readonly toolbar = new Toolbar();
   private readonly eventListeners: EventListener<any>[] = [];

   private roadConnectionBase?: Tile;

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
   }

   public unregisterEventListeners(): void {
      this.eventListeners.forEach(listener => listener.destroy());
   }

   public handleMouseActions(): void {
      if (this.selectedTile) {
         if (this.leftMouseDown) {
            this.leftMouseAction();
         } else if (this.rightMouseDown) {
            this.rightMouseAction(this.selectedTile);
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
      } else if (this.selectedTool == Selection.EDITOR_TOOL && this.selectedTile.hasRoad()) {
         if (this.roadConnectionBase && this.roadConnectionBase !== this.selectedTile) {
            this.selectedTile.connectRoadTo(this.roadConnectionBase);
            this.roadConnectionBase = this.selectedTile;
         }
      }
   }

   public rightMouseAction(tile: Tile): void {
      tile.deleteBuilding(this.toolbar);
   }

   private onLeftMouseDown(_: MouseEvent): void {
      this.leftMouseDown = true;

      if (this.selectedTool === Selection.EDITOR_TOOL && this.selectedTile && this.selectedTile.hasRoad()) {
         this.roadConnectionBase = this.selectedTile;
      }
   }

   private onRightMouseDown(_: MouseEvent): void {
      this.rightMouseDown = true;
   }

   private onLeftMouseUp(_: MouseEvent): void {
      this.leftMouseDown = false;

      if (this.selectedTool === Selection.EDITOR_TOOL && this.roadConnectionBase) {
         this.roadConnectionBase = undefined;
      }
   }

   private onRightMouseUp(_: MouseEvent): void {
      this.rightMouseDown = false;
   }

   private onMouseMove(event: MouseEvent): void {
      if (!(event.target instanceof HTMLCanvasElement)) {
         return;
      }

      const x = Math.floor(event.offsetX / Tile.SIZE);
      const y = Math.floor(event.offsetY / Tile.SIZE);
      if (x < 0 || x >= Map.COLUMN_COUNT || y < 0 || y >= Map.ROW_COUNT) {
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
      if (this.selectedTool === Selection.EDITOR_TOOL && this.roadConnectionBase) {
         this.roadConnectionBase = undefined;
      }
      this.toolbar.selectItemByKey(numberKey);
      GameEventHandler.getInstance().emitEvent(GameEventType.SELECT_TOOLBAR_ITEM, numberKey);
   }
}
