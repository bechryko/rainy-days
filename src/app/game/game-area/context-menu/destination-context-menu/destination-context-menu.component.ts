import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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

   public readonly roadName = computed(() => {
      const road = this.building().tile.road;
      if (!road) {
         return 'None';
      }
      return road.getName();
   });
}
