import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
   selector: 'rd-dialog-close-button',
   imports: [MatIconModule],
   templateUrl: './dialog-close-button.component.html',
   styleUrl: './dialog-close-button.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogCloseButtonComponent {
   private readonly dialogRef = inject(DialogRef);

   @HostListener('click')
   public onClick(): void {
      this.dialogRef.close();
   }
}
