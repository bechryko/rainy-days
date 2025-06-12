import { computed, contentChild, Directive, ElementRef, HostListener, inject, input } from '@angular/core';
import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
   selector: '[rdCustomTooltip]',
   providers: [MatTooltip]
})
export class CustomTooltipDirective {
   private readonly matTooltip = inject(MatTooltip);

   public readonly content = contentChild('rdTooltip', { read: ElementRef });
   private readonly element = computed<HTMLElement | undefined>(() => this.content()?.nativeElement);
   public readonly tooltipPosition = input<TooltipPosition>('below');
   private tooltipElement?: HTMLElement;
   private showTooltip = false;
   private timeout: any;
   private subscription?: Subscription;

   @HostListener('mouseenter')
   public onMouseEnter(): void {
      if (this.timeout) {
         clearTimeout(this.timeout);
      }

      this.matTooltip.message = 'placeholder';
      this.matTooltip.position = this.tooltipPosition();
      this.matTooltip.show();
      this.showTooltip = true;

      this.tooltipElement = this.getTooltipElement();
      this.setTooltipContent();
      this.setTooltipListener();
   }

   @HostListener('mouseleave')
   public onMouseLeave(): void {
      this.showTooltip = false;

      this.timeout = setTimeout(() => {
         if (!this.showTooltip) {
            this.matTooltip.hide();

            delete this.tooltipElement;
            this.subscription?.unsubscribe();
         }
      }, 100);
   }

   private setTooltipContent(): void {
      if (!this.tooltipElement) {
         return;
      }

      const tooltipContainer = this.tooltipElement.querySelector('.mat-mdc-tooltip-surface')!;
      tooltipContainer.innerHTML = this.element()?.outerHTML ?? '';
   }

   private setTooltipListener(): void {
      if (!this.tooltipElement) {
         return;
      }

      this.subscription = fromEvent(this.tooltipElement, 'mouseenter').subscribe(() => (this.showTooltip = true));
   }

   private getTooltipElement(): HTMLElement {
      const tooltips = document.querySelectorAll('.mdc-tooltip');
      return tooltips[tooltips.length - 1] as HTMLElement;
   }
}
