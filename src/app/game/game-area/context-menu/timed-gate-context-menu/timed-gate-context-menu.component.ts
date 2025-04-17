import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { TimedGate } from '@rainy-days/game/core/buildings';
import { TimedPauseWidgetComponent } from '../widgets';

@Component({
   selector: 'rd-timed-gate-context-menu',
   imports: [MatRipple, AsyncPipe, TimedPauseWidgetComponent],
   templateUrl: './timed-gate-context-menu.component.html',
   styleUrl: './timed-gate-context-menu.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimedGateContextMenuComponent {
   public readonly building = input.required<TimedGate>();
   public readonly isGateClosed = computed(() => this.building().isClosed());

   public switchGateState(): void {
      this.building().switch();
   }
}
