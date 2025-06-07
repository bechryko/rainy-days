import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { supportedBrowsers } from '@rainy-days/shared/constants';
import { Browser } from '../../models';

@Component({
   selector: 'rd-browser-support-notice-tile',
   imports: [MatTooltipModule],
   templateUrl: './browser-support-notice-tile.component.html',
   styleUrl: './browser-support-notice-tile.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowserSupportNoticeTileComponent {
   public readonly browser = input.required<Browser>();
   public readonly isUnsupported = computed(() => !(this.browser().type in supportedBrowsers));
   public readonly supportedVersionForBrowser = computed(
      () => supportedBrowsers[this.browser().type as keyof typeof supportedBrowsers]
   );
   public readonly supportedBrowserList = Object.keys(supportedBrowsers).sort().join(', ');
}
