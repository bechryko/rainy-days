import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { appVersion } from '../../../app-version';
import { VersionHistoryDialogComponent } from '../../news/dialogs';

@Component({
   selector: 'rd-new-patch-version-dialog',
   templateUrl: './new-patch-version-dialog.component.html',
   styleUrl: './new-patch-version-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [MatButtonModule]
})
export class NewPatchVersionDialogComponent {
   private readonly dialogRef = inject(DialogRef);
   private readonly dialogService = inject(MatDialog);

   public readonly currentVersion = appVersion.versionNumber;

   public openVersionHistory(): void {
      this.dialogService.open(VersionHistoryDialogComponent);
      this.close();
   }

   public close(): void {
      this.dialogRef.close();
   }
}
