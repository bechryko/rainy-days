import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { DelayedPauseBuilding } from '@rainy-days/game/core/buildings/models';
import { GameEventHandler, GameEventType } from '@rainy-days/game/core/game-events';
import { ContextMenuService } from '../../context-menu.service';

@Component({
   selector: 'rd-delayed-spawn-widget',
   imports: [MatCheckboxModule],
   templateUrl: './timed-pause-widget.component.html',
   styleUrl: './timed-pause-widget.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimedPauseWidgetComponent {
   private readonly contextMenuService = inject(ContextMenuService);
   private readonly cdr = inject(ChangeDetectorRef);

   public readonly building = input.required<DelayedPauseBuilding>();
   @ViewChild('checkbox', { read: ElementRef }) private checkboxElementRef!: ElementRef<HTMLElement>;

   constructor() {
      GameEventHandler.getInstance().watchEvents(GameEventType.COMPLETE_TIMED_PAUSE, () => this.cdr.markForCheck());
   }

   public onTimedPauseChange(change: MatCheckboxChange): void {
      if (change.checked) {
         this.contextMenuService.setTimedPauseBuilding(this.building());
      } else {
         this.contextMenuService.clearTimedPauseBuilding(this.building());
      }

      this.inputElement.blur();
   }

   public get timedPauseWarning(): boolean {
      return this.contextMenuService.hasOtherBuildingTimedPause(this.building());
   }

   private get inputElement(): HTMLElement {
      return this.checkboxElementRef.nativeElement.querySelector("input[type='checkbox']")! as HTMLElement;
   }
}
