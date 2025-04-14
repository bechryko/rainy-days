import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, input, OnDestroy, viewChild } from '@angular/core';
import { GameStartService } from 'src/app/game-start.service';
import { Game } from '../core/game';
import { GameEventHandler, GameEventType } from '../core/game-events';
import { Tile } from '../core/map';
import { Map } from '../core/map/map';
import { RandomUtils } from '../core/utils';
import { GameStatus } from '../models';

@Component({
   selector: 'rd-game-area',
   templateUrl: './game-area.component.html',
   styleUrls: ['./game-area.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAreaComponent implements OnDestroy {
   private readonly gameStartService = inject(GameStartService);

   public readonly gameStatus = input.required<GameStatus>();
   private readonly gameCanvas = viewChild<ElementRef<HTMLCanvasElement>>('gameCanvas');
   private game?: Game;
   private onResizeFn?: () => void;

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

         const canvas = gameCanvas.nativeElement;
         const parameters = this.gameStartService.getStartingParams();
         const seed = !parameters.seed ? Math.random().toString() : parameters.seed;
         RandomUtils.registerSeed(seed);
         console.log(`Game seed: "${seed}"`);
         this.game = new Game(canvas, computed(() => this.gameStatus().gameSpeed));

         this.onResizeFn = () => {
            Tile.resize();
            canvas.style.width = (canvas.width = Map.COLUMN_COUNT * Tile.SIZE) + 'px';
            canvas.style.height = (canvas.height = Map.ROW_COUNT * Tile.SIZE) + 'px';
            this.game!.onResize();
         };
         window.addEventListener('resize', this.onResizeFn);
         this.onResizeFn();

         this.startGame();
      });
   }

   public ngOnDestroy(): void {
      this.game?.stop();
      if (this.onResizeFn) {
         window.addEventListener('resize', this.onResizeFn);
      }
   }

   public startGame(): void {
      GameEventHandler.getInstance().emitEvent(GameEventType.IS_GAME_GOING, true);
      this.game!.startGame();
   }
}
