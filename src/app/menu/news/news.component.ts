import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
   ControlsDialogComponent,
   FeedbackDialogComponent,
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
   public readonly FeedbackDialogComponent = FeedbackDialogComponent;
   public readonly RoadmapDialogComponent = RoadmapDialogComponent;

   public readonly installationTileHref =
      'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing#installing_and_uninstalling_pwas';
}
