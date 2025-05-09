import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'rd-guide-cars',
   imports: [],
   templateUrl: './guide-cars.component.html',
   styleUrl: '../guide-item-component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideCarsComponent {}
