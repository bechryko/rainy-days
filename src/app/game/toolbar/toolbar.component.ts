import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Toolbar } from '@rainy-days/core/control';
import { Route } from '@rainy-days/routes';
import { filter, fromEvent, map } from 'rxjs';
import { GameStatus } from '../models';
import { CalculateTrueGameSpeedPipe } from './pipes';
import { ToolbarIconComponent } from './toolbar-icon/toolbar-icon.component';

@Component({
   selector: 'rd-toolbar',
   templateUrl: './toolbar.component.html',
   styleUrls: ['./toolbar.component.scss'],
   imports: [MatFabButton, MatTooltip, MatButton, CalculateTrueGameSpeedPipe, ToolbarIconComponent],
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class.game-over]': '!gameStatus().isGameGoing'
   }
})
export class ToolbarComponent {
   private readonly router = inject(Router);

   public readonly gameStatus = input.required<GameStatus>();
   public readonly gameSpeedChange = output<number>();

   public readonly possibleGameSpeeds = [0, 1, 2, 4, 8];
   private readonly possibleGameSpeedKeys = ['q', 'w', 'e', 'r'];
   public readonly gameToolbar = Toolbar.inject();

   constructor() {
      fromEvent<KeyboardEvent>(document, 'keydown')
         .pipe(
            takeUntilDestroyed(),
            map(event => event.key),
            filter(key => this.possibleGameSpeedKeys.includes(key))
         )
         .subscribe(key => this.setGameSpeed(this.possibleGameSpeeds[this.possibleGameSpeedKeys.indexOf(key) + 1]));
   }

   public restartGame(): void {
      window.location.reload();
   }

   public selectTool(number: number): void {
      this.gameToolbar()!.selectItemByKey(number);
   }

   public backToMenu(): void {
      this.router.navigateByUrl(Route.MENU);
   }

   public setGameSpeed(speed: number): void {
      this.gameSpeedChange.emit(speed);
   }
}
