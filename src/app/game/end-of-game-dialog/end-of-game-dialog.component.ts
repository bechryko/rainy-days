import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Route } from '@rainy-days/routes';
import { EndOfGameDialogData } from './end-of-game-dialog-data';

@Component({
   selector: 'rd-end-of-game-dialog',
   imports: [MatButtonModule],
   templateUrl: './end-of-game-dialog.component.html',
   styleUrl: './end-of-game-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndOfGameDialogComponent {
   public readonly dialogData = inject<EndOfGameDialogData>(MAT_DIALOG_DATA);
   private readonly dialogRef = inject(DialogRef);
   private readonly router = inject(Router);

   public playAgain(): void {
      window.location.reload();
   }

   public backToMenu(): void {
      this.router.navigateByUrl(Route.MENU);
      this.dialogRef.close();
   }
}
