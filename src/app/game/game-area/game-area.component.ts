import {
   ChangeDetectionStrategy,
   Component,
   effect,
   ElementRef,
   input,
   OnDestroy,
   signal,
   viewChild
} from '@angular/core';
import { Building } from '../core/buildings';
import { Game } from '../core/game';
import { GameEventHandler, GameEventType } from '../core/game-events';
import { ConstantUtils, RandomUtils } from '../core/utils';
import { GameStatus } from '../models';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@Component({
   selector: 'rd-game-area',
   templateUrl: './game-area.component.html',
   styleUrls: ['./game-area.component.scss'],
   imports: [ContextMenuComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameAreaComponent implements OnDestroy {
   public readonly gameStatus = input.required<GameStatus>();
   public readonly seed = input.required<string>();
   private readonly gameCanvas = viewChild<ElementRef<HTMLCanvasElement>>('gameCanvas');
   private game?: Game;
   private onResizeFn?: () => void;

   public readonly contextMenuBuilding = signal<Building | undefined>(undefined);

   constructor() {
      GameEventHandler.getInstance().watchEvents(GameEventType.OPEN_CONTEXT_MENU, building =>
         this.contextMenuBuilding.set(building)
      );
      GameEventHandler.getInstance().watchEvents(GameEventType.CLOSE_CONTEXT_MENU, () =>
         this.contextMenuBuilding.set(undefined)
      );

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
         RandomUtils.registerSeed(this.seed());

         this.game = new Game(canvas, this.gameStatus);

         this.onResizeFn = () => {
            ConstantUtils.resize();
            canvas.style.width = (canvas.width = ConstantUtils.unit(ConstantUtils.COLUMN_COUNT)) + 'px';
            canvas.style.height = (canvas.height = ConstantUtils.unit(ConstantUtils.ROW_COUNT)) + 'px';
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
         window.removeEventListener('resize', this.onResizeFn);
      }
   }

   public startGame(): void {
      GameEventHandler.getInstance().emitEvent(GameEventType.START_GAME, null);
      this.game!.startGame();
   }
}
