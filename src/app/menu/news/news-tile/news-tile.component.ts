import { ComponentType } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, effect, HostListener, inject, input, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { IconComponent, IconName } from '@rainy-days/shared/components';
import { filter, fromEvent, Subscription } from 'rxjs';

@Component({
   selector: 'rd-news-tile',
   imports: [IconComponent],
   templateUrl: './news-tile.component.html',
   styleUrl: './news-tile.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class.openable]': 'dialog() || href()',
      '[class.no-description]': '!description()'
   }
})
export class NewsTileComponent implements OnDestroy {
   private readonly dialogService = inject(MatDialog);

   public readonly tileTitle = input.required<string>();
   public readonly description = input<string>();
   public readonly icon = input<IconName>();
   public readonly dialog = input<ComponentType<unknown>>();
   public readonly href = input<string>();
   public readonly quickKey = input<string>();
   private subscription?: Subscription;
   private dialogRef?: MatDialogRef<any, any>;

   constructor() {
      effect(() => {
         const quickKey = this.quickKey();
         if (!quickKey || quickKey.length !== 1) {
            return;
         }

         if (this.subscription) {
            this.subscription.unsubscribe();
         }
         this.subscription = fromEvent<KeyboardEvent>(document, 'keydown')
            .pipe(filter(event => event.key === quickKey && !event.ctrlKey && !event.altKey && !event.shiftKey))
            .subscribe(() => this.onClick());
      });
   }

   @HostListener('click')
   public onClick(): void {
      const dialog = this.dialog();
      if (dialog) {
         this.openDialog(dialog);
      }

      const href = this.href();
      if (href) {
         this.navigate(href);
      }
   }

   private navigate(href: string): void {
      globalThis.open(href, '_blank')?.focus();
   }

   public ngOnDestroy(): void {
      this.subscription?.unsubscribe();
      this.dialogRef?.close();
   }

   private openDialog(dialog: ComponentType<unknown>): void {
      if (this.dialogRef && this.dialogRef.getState() === MatDialogState.OPEN) {
         this.dialogRef.close();
         this.dialogRef = undefined;
         return;
      }

      this.dialogRef = this.dialogService.open(dialog);
   }
}
