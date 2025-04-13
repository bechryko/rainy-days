import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Toolbar } from '../core/control/toolbar';
import { GameStatus } from '../model';

@Component({
   selector: 'rd-toolbar',
   templateUrl: './toolbar.component.html',
   styleUrls: ['./toolbar.component.scss'],
   imports: [NgClass, MatFabButton, MatTooltip, MatButton],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
   public readonly gameStatus = input.required<GameStatus>();

   public readonly gameToolbar = Toolbar.inject();

   public restartGame(): void {
      window.location.reload();
   }

   public selectTool(number: number): void {
      this.gameToolbar()!.selectItemByKey(number);
   }
}
