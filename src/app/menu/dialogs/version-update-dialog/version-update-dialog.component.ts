import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'rd-version-update-dialog',
   imports: [MatButtonModule],
   templateUrl: './version-update-dialog.component.html',
   styleUrl: './version-update-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionUpdateDialogComponent {
   public readonly dialogRef = inject(DialogRef);

   public restartGame(): void {
      document.location.reload();
   }

   public close(): void {
      this.dialogRef.close();
   }
}
