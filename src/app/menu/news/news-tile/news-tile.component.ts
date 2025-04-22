import { ComponentType } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, HostListener, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconComponent, IconName } from '@rainy-days/shared/components';

@Component({
   selector: 'rd-news-tile',
   imports: [IconComponent],
   templateUrl: './news-tile.component.html',
   styleUrl: './news-tile.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class.openable]': 'dialog()',
      '[class.no-description]': '!description()'
   }
})
export class NewsTileComponent {
   private readonly dialogService = inject(MatDialog);

   public readonly tileTitle = input.required<string>();
   public readonly description = input<string>();
   public readonly icon = input<IconName>();
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
