import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';
import {
   GuideCarsComponent,
   GuideGatesComponent,
   GuideGoalComponent,
   GuideOverviewComponent,
   GuideRoadsComponent
} from './components';

interface GuideItem {
   title: string;
   component: ComponentType<any>;
}

@Component({
   selector: 'rd-guide-dialog',
   imports: [DialogCloseButtonComponent, MatButtonModule, NgComponentOutlet],
   templateUrl: './guide-dialog.component.html',
   styleUrl: './guide-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideDialogComponent {
   public readonly items: GuideItem[] = [
      {
         title: 'Overview',
         component: GuideOverviewComponent
      },
      {
         title: 'Goal',
         component: GuideGoalComponent
      },
      {
         title: 'Cars',
         component: GuideCarsComponent
      },
      {
         title: 'Roads',
         component: GuideRoadsComponent
      },
      {
         title: 'Gates',
         component: GuideGatesComponent
      }
   ];

   public selectedItem = this.items[0];

   public selectItem(item: GuideItem): void {
      this.selectedItem = item;
   }

   @HostListener('keydown', ['$event'])
   public onKeyDown(event: KeyboardEvent): void {
      if (['ArrowUp', 'KeyW'].includes(event.code)) {
         this.nextItem(-1);
      } else if (['ArrowDown', 'KeyS'].includes(event.code)) {
         this.nextItem(1);
      }
   }

   private nextItem(step: number): void {
      this.selectItem(this.items[(this.selectedItemIndex + this.items.length + step) % this.items.length]);
   }

   private get selectedItemIndex(): number {
      return this.items.indexOf(this.selectedItem);
   }
}
