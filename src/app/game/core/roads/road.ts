import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Direction } from '../map/models';
import { DirectionUtils } from '../map/utils';
import { ConstantUtils } from '../utils';

export abstract class Road {
   private static readonly THICKNESS_UNIT = 0.5;
   private static readonly SEGMENT_CONNECTION_OFFSET_UNIT = 0.16;

   protected readonly connections: Record<Direction, boolean> = {
      [Direction.UP]: false,
      [Direction.RIGHT]: false,
      [Direction.DOWN]: false,
      [Direction.LEFT]: false
   };

   constructor(
      protected readonly tile: Tile,
      public readonly speedMultiplier: number,
      public readonly protectsFromRain: boolean
   ) {}

   public connectTo(other: Road): void {
      const neighborDirection = this.getNeighborDirection(other);
      if (neighborDirection === null) {
         return;
      }

      this.connections[neighborDirection] = true;
      other.connections[DirectionUtils.getOpposite(neighborDirection)] = true;
   }

   public removeConnection(direction: Direction): void {
      this.connections[direction] = false;
   }

   public isConnectedTo(other: Road): boolean {
      const neighborDirection = this.getNeighborDirection(other);
      if (neighborDirection === null) {
         return false;
      }
      return this.matchTypeWith(other) || this.connections[neighborDirection];
   }

   public abstract matchTypeWith(other: Road): boolean;

   public abstract draw(drawer: BasicDrawer): void;

   public abstract drawRoadSegment(drawer: BasicDrawer, x1: number, y1: number, x2: number, y2: number): void;

   public abstract getName(): string;

   protected drawRoadBase(drawer: BasicDrawer, color: string, thicknessInUnit = Road.THICKNESS_UNIT): void {
      drawer.strokeStyle = color;
      drawer.lineWidth = ConstantUtils.unit(thicknessInUnit);
      drawer.lineCap = 'round';

      drawer.ctx.beginPath();
      drawer.ctx.moveTo(ConstantUtils.unit(this.tile.x + 0.5), ConstantUtils.unit(this.tile.y + 0.5));
      drawer.ctx.lineTo(ConstantUtils.unit(this.tile.x + 0.5), ConstantUtils.unit(this.tile.y + 0.5));
      DirectionUtils.forEachDirection((direction, dx, dy) => {
         if (!this.tile.isConnectedWithRoad(direction)) {
            return;
         }

         const segmentConnectionOffsetDirectionMultiplier =
            direction === Direction.UP || direction === Direction.LEFT ? 1 : -1;
         const segmentConnectionOffsetX =
            Math.sign(dx) * Road.SEGMENT_CONNECTION_OFFSET_UNIT * segmentConnectionOffsetDirectionMultiplier;
         const segmentConnectionOffsetY =
            Math.sign(dy) * Road.SEGMENT_CONNECTION_OFFSET_UNIT * segmentConnectionOffsetDirectionMultiplier;

         drawer.ctx.lineTo(
            ConstantUtils.unit(this.tile.x + 0.5 + dx / 2 - segmentConnectionOffsetX),
            ConstantUtils.unit(this.tile.y + 0.5 + dy / 2 - segmentConnectionOffsetY)
         );
         drawer.ctx.moveTo(ConstantUtils.unit(this.tile.x + 0.5), ConstantUtils.unit(this.tile.y + 0.5));
      });
      drawer.ctx.stroke();
   }

   private getNeighborDirection(other: Road): Direction | null {
      let result: Direction | null = null;

      DirectionUtils.forEachDirection((direction, dx, dy, breakFn) => {
         if (this.tile.x + dx === other.tile.x && this.tile.y + dy === other.tile.y) {
            result = direction;
            breakFn();
         }
      });

      return result;
   }
}
