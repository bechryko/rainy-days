import { Signal, signal } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { BasicDrawer } from '../drawing';
import { toFraction } from '../functions';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { Gate } from './gate';
import { TimedPauseBuilding } from './models';

export class TimedGate extends Gate implements TimedPauseBuilding {
   public static readonly BARRIER_TIMER = 4;
   public static readonly OPEN_COLOR = '#BBB';
   public static readonly CLOSED_COLOR = '#444';
   public static readonly DENY_COLOR = 'red';

   private timer = TimedGate.BARRIER_TIMER;
   private readonly _displayTimer$ = new BehaviorSubject(toFraction(this.timer));
   private readonly closed = signal(false);
   public timedPause = false;

   constructor(tile: Tile) {
      super(tile, true);
   }

   public switch(): void {
      this.closed.update(state => !state);
      this.emit();

      if (this.timedPause) {
         GameEventHandler.getInstance().emitEvent(GameEventType.TOGGLE_PAUSE, null);
         GameEventHandler.getInstance().emitEvent(GameEventType.COMPLETE_TIMED_PAUSE, null);
         this.timedPause = false;
      }
   }

   public doesLetPass(): boolean {
      return !this.closed();
   }

   public tick(deltaTime: number): void {
      this.timer -= deltaTime;
      this.emit();

      if (this.timer < 0) {
         this.timer = TimedGate.BARRIER_TIMER;
         this.switch();
      }
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.square((this.tile.x + 0.25) * Tile.SIZE, (this.tile.y + 0.25) * Tile.SIZE, Tile.SIZE / 2);
      const color = this.closed() ? TimedGate.CLOSED_COLOR : TimedGate.OPEN_COLOR;
      drawer.square((this.tile.x + 0.3) * Tile.SIZE, (this.tile.y + 0.3) * Tile.SIZE, Tile.SIZE * 0.4, color);

      if (this.closed()) {
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

   public get isClosed(): Signal<boolean> {
      return this.closed.asReadonly();
   }

   public get displayTimer$(): Observable<string> {
      return this._displayTimer$.pipe(distinctUntilChanged());
   }

   private emit(): void {
      this._displayTimer$.next(toFraction(this.timer));
   }
}
