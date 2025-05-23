import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
   ControlsDialogComponent,
   GuideDialogComponent,
   RoadmapDialogComponent,
   TipsDialogComponent,
   VersionHistoryDialogComponent
} from './dialogs';
import { NewsTileComponent } from './news-tile/news-tile.component';

@Component({
   selector: 'rd-news',
   templateUrl: './news.component.html',
   styleUrls: ['./news.component.scss'],
   imports: [NewsTileComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent {
   public readonly GuideDialogComponent = GuideDialogComponent;
   public readonly ControlsDialogComponent = ControlsDialogComponent;
   public readonly TipsDialogComponent = TipsDialogComponent;
   public readonly VersionHistoryDialogComponent = VersionHistoryDialogComponent;
   public readonly RoadmapDialogComponent = RoadmapDialogComponent;
}
