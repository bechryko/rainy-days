import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'rd-guide-overview',
   imports: [],
   templateUrl: './guide-overview.component.html',
   styleUrl: '../guide-item-component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideOverviewComponent {}
