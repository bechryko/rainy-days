import { Building, Destination, Gate } from '../buildings';
import { Toolbar } from '../control/toolbar';
import { BasicDrawer } from '../drawing';
import { GameEventHandler, GameEventType } from '../game-events';
import { Road, Tube } from '../roads';
import { Car } from './car';
import { Map } from './map';
import { Direction } from './models/direction';
import { ColorUtils, DirectionUtils, ResizeUtils } from './utils';

export class Tile {
   private static _SIZE: number;

   public static get SIZE(): number {
      return this._SIZE;
   }

   public static resize(): void {
      this._SIZE = ResizeUtils.getMaxTileSize();
   }

   static {
      this.resize();
   }

   public color = ColorUtils.getBaseTileColor();
   private road?: Road;
   private building?: Building;
   public selected = false;

   private readonly neighborMap: Record<Direction, Tile | null> = {} as any;

   constructor(
      public readonly x: number,
      public readonly y: number
   ) {}

   public build(buildable: Building | Road): void {
      if (buildable instanceof Building) {
         if (!this.building || buildable.isSpawned()) {
            this.building = buildable;
         }
      } else if (buildable instanceof Road && !this.road) {
         this.road = buildable;
      }
   }

   public tick(deltaTime: number): void {
      if (this.hasBuilding() && 'tick' in this.building! && typeof this.building?.tick === 'function') {
         this.building.tick(deltaTime);
      }
   }

   public tileAction(car: Car): void {
      if (!(this.road instanceof Tube) && this.color !== ColorUtils.getBaseTileColor()) {
         car.color = this.color;
      }

      if (this.hasBuilding() && this.building instanceof Destination && this.building.color === car.color) {
         car.destroy(); //TODO: object pool
         this.building.heal();
         GameEventHandler.getInstance().emitEvent(GameEventType.GAIN_SCORE, null);
      }
   }

   public openContextMenu(): void {
      if (this.building) {
         GameEventHandler.getInstance().emitEvent(GameEventType.OPEN_CONTEXT_MENU, this.building);
      }
   }

   public isUnlocked(car: Car, carTile: Tile): boolean;
   public isUnlocked(car: Car, tiles: Tile[][]): boolean;
   public isUnlocked(car: Car, tileOrTiles: Tile | Tile[][]): boolean {
      if (!this.road) {
         return false;
      }

      const carTile = tileOrTiles instanceof Tile ? tileOrTiles : car.getTile(tileOrTiles);
      const connectedRoadDirections = carTile.getConnectedRoadDirections();
      if (!connectedRoadDirections.some(direction => carTile.getTileInDirection(direction) === this)) {
         return false;
      }
      if (!this.hasBuilding()) {
         return true;
      }
      if (this.building instanceof Gate) {
         return this.building.doesLetPass(car);
      }
      return true;
   }

   public connectRoadTo(other: Tile): void {
      if (!this.road || !other.road) {
         return;
      }

      this.road?.connectTo(other.road);
   }

   public deleteBuilding(toolbar: Toolbar): void {
      if (this.building && toolbar.isAssociatedItemSelected(this.building)) {
         this.building = undefined;
      } else if (this.road && toolbar.isAssociatedItemSelected(this.road)) {
         this.road = undefined;

         this.forEachNeighbor((neighbor, direction) => {
            if (neighbor.road) {
               neighbor.road.removeConnection(DirectionUtils.getOpposite(direction));
            }
         });
      }
   }

   public hasBuilding(): boolean {
      return Boolean(this.building);
   }

   public hasSpawnedBuilding(): boolean {
      return this.hasBuilding() && this.building!.isSpawned();
   }

   public hasRoad(): boolean {
      return Boolean(this.road);
   }

   public getTileInDirection(direction: Direction): Tile | null {
      return this.neighborMap[direction];
   }

   public assignNeighbors(tiles: Tile[][]): void {
      DirectionUtils.forEachDirection(direction => {
         const x = this.x + DirectionUtils.getDx(direction);
         const y = this.y + DirectionUtils.getDy(direction);
         if (x < 0 || x >= Map.COLUMN_COUNT || y < 0 || y >= Map.ROW_COUNT) {
            this.neighborMap[direction] = null;
         } else {
            this.neighborMap[direction] = tiles[x][y];
         }
      });
   }

   public draw(drawer: BasicDrawer): void {
      drawer.square(this.x * Tile.SIZE, this.y * Tile.SIZE, Tile.SIZE, this.color);
   }

   public drawBuilding(drawer: BasicDrawer): void {
      if (this.building) {
         this.building.draw(drawer);
      }
   }

   public drawRoad(drawer: BasicDrawer): void {
      if (this.road) {
         this.road.draw(drawer);
      }
   }

   public forEachNeighbor(callback: (tile: Tile, direction: Direction) => void): void {
      DirectionUtils.forEachDirection(direction => {
         const tile = this.getTileInDirection(direction);
         if (!tile) {
            return;
         }
         callback(tile, direction);
      });
   }

   public isConnectedWithRoad(direction: Direction): boolean {
      return this.getConnectedRoadDirections().includes(direction);
   }

   private getConnectedRoadDirections(): Direction[] {
      const connectedRoadDirections: Direction[] = [];

      DirectionUtils.forEachDirection(direction => {
         const tile = this.getTileInDirection(direction);
         if (!tile?.road) {
            return;
         }

         if (this.road?.isConnectedTo(tile.road)) {
            connectedRoadDirections.push(direction);
         }
      });

      return connectedRoadDirections;
   }
}
