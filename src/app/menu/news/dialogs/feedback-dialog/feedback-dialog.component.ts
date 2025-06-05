import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogCloseButtonComponent, IconComponent } from '@rainy-days/shared/components';

@Component({
   selector: 'rd-feedback-dialog',
   imports: [DialogCloseButtonComponent, IconComponent, MatButtonModule],
   templateUrl: './feedback-dialog.component.html',
   styleUrl: './feedback-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackDialogComponent {
   public readonly githubDiscussionsUrl = 'https://github.com/bechryko/rainy-days/discussions';
   public readonly feedbackPollsUrl = 'https://github.com/bechryko/rainy-days/discussions/categories/feedback-polls';
   public readonly musicFeedbackUrl = 'https://github.com/bechryko/rainy-days/discussions/categories/music';
   public readonly featureIdeasUrl = 'https://github.com/bechryko/rainy-days/discussions/categories/ideas';
   public readonly bugReportUrl = 'https://github.com/bechryko/rainy-days/discussions/categories/bugs';
}
