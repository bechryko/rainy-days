import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, input, OnDestroy, viewChild } from '@angular/core';
import { GameStartService } from 'src/app/game-start.service';
import { Game } from '../core/game';
import { GameEventHandler, GameEventType } from '../core/game-events';
import { RandomUtils } from '../core/utils';

@Component({
   selector: 'rd-game-area',
   templateUrl: './game-area.component.html',
   styleUrls: ['./game-area.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAreaComponent implements OnDestroy {
   private readonly gameStartService = inject(GameStartService);

   public readonly isGameGoing = input.required<boolean>();
   private readonly gameCanvas = viewChild<ElementRef<HTMLCanvasElement>>("gameCanvas");
   private game?: Game;

   constructor() {
      effect(() => {
         const gameCanvas = this.gameCanvas();
         if (!gameCanvas || this.game) {
            return;
         }

         document.addEventListener(
            'contextmenu',
            e => {
               e.preventDefault();
            },
            false
         );
         const parameters = this.gameStartService.getStartingParams();
         const seed = !parameters.seed ? Math.random().toString() : parameters.seed;
         RandomUtils.registerSeed(seed);
         console.log(`Game seed: "${seed}"`);
         this.game = new Game(gameCanvas.nativeElement);
         this.startGame();
      })
   }

   public ngOnDestroy(): void {
      this.game?.stop();
   }

   public startGame(): void {
      GameEventHandler.getInstance().emitEvent(GameEventType.IS_GAME_GOING, true);
      this.game!.startGame();
   }
}
