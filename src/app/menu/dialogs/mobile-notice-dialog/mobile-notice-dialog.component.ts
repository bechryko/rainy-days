import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
   selector: 'rd-mobile-notice-dialog',
   imports: [MatButtonModule],
   templateUrl: './mobile-notice-dialog.component.html',
   styleUrl: './mobile-notice-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNoticeDialogComponent {
   private readonly dialogRef = inject(DialogRef);

   public close(): void {
      this.dialogRef.close();
   }
}
