import { BasicDrawer } from "../drawing";
import { Tile } from "../map";
import { Direction } from "../map/models";
import { DirectionUtils } from "../map/utils";

export abstract class Road {
   protected readonly connections: Record<Direction, boolean> = {
      [Direction.UP]: false,
      [Direction.RIGHT]: false,
      [Direction.DOWN]: false,
      [Direction.LEFT]: false
   };

   constructor(protected readonly tile: Tile) {}

   public connectTo(other: Road): void {
      const neighborDirection = this.getNeighborDirection(other);
      if(neighborDirection === null) {
         throw new Error("Can't connect to other road");
      }
      this.connections[neighborDirection] = true;
      other.connections[DirectionUtils.getOpposite(neighborDirection)] = true;
   }

   public removeConnection(direction: Direction): void {
      this.connections[direction] = false;
   }

   public isConnectedTo(other: Road): boolean {
      const neighborDirection = this.getNeighborDirection(other);
      if(neighborDirection === null) {
         return false;
      }
      return this.matchTypeWith(other) || this.connections[neighborDirection];
   }

   public abstract matchTypeWith(other: Road): boolean;

   public abstract draw(drawer: BasicDrawer): void;

   protected drawRoadBase(drawer: BasicDrawer, color: string, size: number): void {
      drawer.strokeStyle = color;
      drawer.lineWidth = size;
      drawer.lineCap = "round";

      drawer.ctx.beginPath();
      drawer.ctx.moveTo((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE);
      drawer.ctx.lineTo((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE);
      DirectionUtils.forEachDirection((direction, dx, dy) => {
         if(!this.tile.isConnectedWithRoad(direction)) {
            return;
         }

         drawer.ctx.lineTo(
            (this.tile.x + 0.5 + dx / 2) * Tile.SIZE,
            (this.tile.y + 0.5 + dy / 2) * Tile.SIZE
         );
         drawer.ctx.moveTo(
            (this.tile.x + 0.5) * Tile.SIZE,
            (this.tile.y + 0.5) * Tile.SIZE
         );
      });
      drawer.ctx.stroke();
   }

   private getNeighborDirection(other: Road): Direction | null {
      let result: Direction | null = null;

      DirectionUtils.forEachDirection((direction, dx, dy, breakFn) => {
         if(this.tile.x + dx === other.tile.x && this.tile.y + dy === other.tile.y) {
            result = direction;
            breakFn();
         }
      });

      return result;
   }
}
