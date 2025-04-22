import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';
import { TipsUtils } from './tips.utils';

@Component({
   selector: 'rd-tips-dialog',
   imports: [MatButtonModule, DialogCloseButtonComponent],
   templateUrl: './tips-dialog.component.html',
   styleUrl: './tips-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipsDialogComponent {
   public readonly questions = TipsUtils.getQuestions();
   public answer?: string;
   public currentQuestion?: string;

   public getAnswer(question: string): void {
      this.answer = TipsUtils.getRandomAnswer(question, this.answer);
      this.currentQuestion = question;
   }

   public deleteQuestion(): void {
      this.answer = undefined;
      this.currentQuestion = undefined;
   }
}
