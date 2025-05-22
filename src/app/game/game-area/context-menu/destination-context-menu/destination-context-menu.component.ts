import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Destination } from '@rainy-days/core/buildings';

@Component({
   selector: 'rd-destination-context-menu',
   imports: [AsyncPipe],
   templateUrl: './destination-context-menu.component.html',
   styleUrl: './destination-context-menu.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class DestinationContextMenuComponent {
   public readonly building = input.required<Destination>();
}
