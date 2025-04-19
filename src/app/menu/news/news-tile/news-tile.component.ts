import { ComponentType } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, HostListener, inject, input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
   selector: 'rd-news-tile',
   imports: [MatDialogModule],
   templateUrl: './news-tile.component.html',
   styleUrl: './news-tile.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class.openable]': 'dialog()'
   }
})
export class NewsTileComponent {
   private readonly dialogService = inject(MatDialog);

   public readonly tileTitle = input.required<string>();
   public readonly description = input<string>();
   public readonly dialog = input<ComponentType<unknown>>();

   @HostListener('click')
   public openDialog(): void {
      const dialog = this.dialog();
      if (!dialog) {
         return;
      }

      this.dialogService.open(dialog);
   }
}
