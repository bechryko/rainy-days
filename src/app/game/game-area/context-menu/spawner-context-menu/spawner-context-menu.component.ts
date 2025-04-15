import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Spawner } from '@rainy-days/game/core/buildings';

@Component({
   selector: 'rd-spawner-context-menu',
   imports: [AsyncPipe],
   templateUrl: './spawner-context-menu.component.html',
   styleUrl: './spawner-context-menu.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpawnerContextMenuComponent {
   public readonly spawnDelayTimes = [0.5, 1];

   public readonly building = input.required<Spawner>();

   public delaySpawn(delay: number): void {
      this.building().delaySpawn(delay);
   }
}
