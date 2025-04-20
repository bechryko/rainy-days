import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlsDialogComponent } from './dialogs';
import { NewsTileComponent } from './news-tile/news-tile.component';

@Component({
   selector: 'rd-news',
   templateUrl: './news.component.html',
   styleUrls: ['./news.component.scss'],
   imports: [NewsTileComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent {
   public readonly ControlsDialogComponent = ControlsDialogComponent;
}
