import { Signal, signal } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { BasicDrawer } from '../drawing';
import { toFraction, transparent } from '../functions';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { ColorUtils, ComponentColorToken, SystemColorToken } from '../map/utils';
import { ConstantUtils } from '../utils';
import { Gate } from './gate';
import { TimedPauseBuilding } from './models';

export class TimedGate extends Gate implements TimedPauseBuilding {
   private static readonly BARRIER_TIMER = 4;

   private timer = TimedGate.BARRIER_TIMER;
   private readonly _displayTimer$ = new BehaviorSubject(toFraction(this.timer));
   private readonly closed = signal(false);
   public timedPause = false;

   constructor(tile: Tile) {
      super(tile);
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
      const color = this.closed()
         ? ColorUtils.getTokenValue(ComponentColorToken.TIMED_GATE_CLOSED)
         : ColorUtils.getTokenValue(ComponentColorToken.TIMED_GATE_OPEN);

      if (this.tile.selected) {
         drawer.circle(
            ConstantUtils.unit(this.tile.x + 0.5),
            ConstantUtils.unit(this.tile.y + 0.5),
            ConstantUtils.unit(0.75),
            drawer.createRadialGradient(
               ConstantUtils.unit(this.tile.x + 0.5),
               ConstantUtils.unit(this.tile.y + 0.5),
               ConstantUtils.unit(0.5),
               [0.45, color],
               [1, transparent()]
            )
         );
      }

      drawer.square(
         ConstantUtils.unit(this.tile.x + 0.25),
         ConstantUtils.unit(this.tile.y + 0.25),
         ConstantUtils.unit(0.5),
         ColorUtils.getTokenValue(SystemColorToken.BUILDING_OUTLINE)
      );
      drawer.square(
         ConstantUtils.unit(this.tile.x + 0.3),
         ConstantUtils.unit(this.tile.y + 0.3),
         ConstantUtils.unit(0.4),
         color
      );

      if (this.closed()) {
         drawer.strokeStyle = ColorUtils.getTokenValue(SystemColorToken.WARN);

         const width = ConstantUtils.unit(0.05);
         drawer.line(
            ConstantUtils.unit(this.tile.x + 0.3) + width / 2,
            ConstantUtils.unit(this.tile.y + 0.3) + width / 2,
            ConstantUtils.unit(this.tile.x + 0.7) - width / 2,
            ConstantUtils.unit(this.tile.y + 0.7) - width / 2,
            width
         );
         drawer.line(
            ConstantUtils.unit(this.tile.x + 0.3) + width / 2,
            ConstantUtils.unit(this.tile.y + 0.7) - width / 2,
            ConstantUtils.unit(this.tile.x + 0.7) - width / 2,
            ConstantUtils.unit(this.tile.y + 0.3) + width / 2,
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
