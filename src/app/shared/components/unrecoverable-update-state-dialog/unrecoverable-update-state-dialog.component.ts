import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'rd-unrecoverable-update-state-dialog',
   imports: [MatButtonModule],
   templateUrl: './unrecoverable-update-state-dialog.component.html',
   styleUrl: './unrecoverable-update-state-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnrecoverableUpdateStateDialogComponent {
   public readonly errorReason = inject<string>(DIALOG_DATA);

   public restartGame(): void {
      document.location.reload();
   }
}
