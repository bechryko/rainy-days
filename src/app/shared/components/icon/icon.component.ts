import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export type IconName = 'info' | 'controller' | 'history' | 'road' | 'guide' | 'forum' | 'github';

@Component({
   selector: 'rd-icon',
   imports: [MatIconModule],
   templateUrl: './icon.component.html',
   styleUrl: './icon.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
   public readonly name = input.required<IconName>();
}
