import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Gate } from './gate';

export class TimedGate extends Gate {
   public static readonly BARRIER_TIMER = 4;
   public static readonly OPEN_COLOR = '#BBB';
   public static readonly CLOSED_COLOR = '#444';
   public static readonly DENY_COLOR = 'red';

   private timer = TimedGate.BARRIER_TIMER;
   private isClosed = false;

   constructor(tile: Tile) {
      super(tile, true);
   }

   public switch(): void {
      this.isClosed = !this.isClosed;
   }

   public doesLetPass(): boolean {
      return !this.isClosed;
   }

   public tick(deltaTime: number): void {
      this.timer -= deltaTime;
      if (this.timer < 0) {
         this.timer = TimedGate.BARRIER_TIMER;
         this.switch();
      }
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.square((this.tile.x + 0.25) * Tile.SIZE, (this.tile.y + 0.25) * Tile.SIZE, Tile.SIZE / 2);
      const color = this.isClosed ? TimedGate.CLOSED_COLOR : TimedGate.OPEN_COLOR;
      drawer.square((this.tile.x + 0.3) * Tile.SIZE, (this.tile.y + 0.3) * Tile.SIZE, Tile.SIZE * 0.4, color);

      if (this.isClosed) {
         drawer.strokeStyle = TimedGate.DENY_COLOR;

         const width = Tile.SIZE * 0.05;
         drawer.line(
            (this.tile.x + 0.3) * Tile.SIZE + width / 2,
            (this.tile.y + 0.3) * Tile.SIZE + width / 2,
            (this.tile.x + 0.7) * Tile.SIZE - width / 2,
            (this.tile.y + 0.7) * Tile.SIZE - width / 2,
            width
         );
         drawer.line(
            (this.tile.x + 0.3) * Tile.SIZE + width / 2,
            (this.tile.y + 0.7) * Tile.SIZE - width / 2,
            (this.tile.x + 0.7) * Tile.SIZE - width / 2,
            (this.tile.y + 0.3) * Tile.SIZE + width / 2,
            width
         );
      }
   }
}
