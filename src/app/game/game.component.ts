import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from '@rainy-days/core/game';
import { GameEventHandler, GameEventType } from '@rainy-days/core/game-events';
import { filter, map, pairwise } from 'rxjs';
import { EndOfGameDialogComponent } from './end-of-game-dialog/end-of-game-dialog.component';
import { GameAreaComponent } from './game-area';
import { GameStatus } from './models';
import { ToolbarComponent } from './toolbar';

@Component({
   selector: 'rd-game',
   templateUrl: './game.component.html',
   styleUrls: ['./game.component.scss'],
   imports: [ToolbarComponent, NgClass, GameAreaComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
   private readonly snackbar = inject(MatSnackBar);
   private readonly dialog = inject(MatDialog);

   public readonly gameStatus = signal<GameStatus>({
      isGameGoing: false,
      isPaused: false,
      gameSpeed: 1,
      selectedToolbarItem: 0,
      score: 0,
      spawnTimer: 0
   });

   constructor() {
      GameEventHandler.getInstance().watchEvents(GameEventType.IS_GAME_GOING, isGameGoing =>
         this.gameStatus.update(status => ({
            ...status,
            isGameGoing
         }))
      );
      GameEventHandler.getInstance().watchEvents(GameEventType.TOGGLE_PAUSE, () =>
         this.gameStatus.update(status => ({
            ...status,
            isPaused: !status.isPaused
         }))
      );
      GameEventHandler.getInstance().watchEvents(GameEventType.SELECT_TOOLBAR_ITEM, selectedToolbarItem =>
         this.gameStatus.update(status => ({
            ...status,
            selectedToolbarItem
         }))
      );
      GameEventHandler.getInstance().watchEvents(GameEventType.GAIN_SCORE, () =>
         this.gameStatus.update(status => ({
            ...status,
            score: status.score + 1
         }))
      );
      GameEventHandler.getInstance().watchEvents(GameEventType.UPDATE_SPAWN_TIMER, timer => {
         if (
            this.gameStatus().spawnTimer > Game.BUILDING_SPAWN_MESSAGE_TIME &&
            timer <= Game.BUILDING_SPAWN_MESSAGE_TIME
         ) {
            this.openSnackbarMessage(`New spawner and destination spawns in ${timer} seconds`, 'Understood');
         }
         this.gameStatus.update(status => ({
            ...status,
            spawnTimer: timer
         }));
      });
      GameEventHandler.getInstance().watchEvents(GameEventType.DESTINATION_CRITICAL_HEALTH, health => {
         this.openSnackbarMessage(`One of your destinations has ${health} health!`, "I'll fix it!");
      });

      toObservable(this.gameStatus)
         .pipe(
            map(status => status.isGameGoing),
            pairwise(),
            filter(([oldIsGameGoing, newIsGameGoing]) => oldIsGameGoing !== newIsGameGoing && !newIsGameGoing),
            takeUntilDestroyed()
         )
         .subscribe(() => this.openEndOfGameDialog());
   }

   public onGameSpeedChange(gameSpeed: number): void {
      if (gameSpeed === 0 && !this.gameStatus().isPaused) {
         GameEventHandler.getInstance().emitEvent(GameEventType.TOGGLE_PAUSE, null);
         return;
      }
      if (gameSpeed !== 0) {
         if (this.gameStatus().isPaused) {
            GameEventHandler.getInstance().emitEvent(GameEventType.TOGGLE_PAUSE, null);
         }
         this.gameStatus.update(status => ({
            ...status,
            gameSpeed
         }));
      }
   }

   public openEndOfGameDialog(): void {
      this.dialog.open(EndOfGameDialogComponent);
   }

   public openSnackbarMessage(message: string, action: string): void {
      this.snackbar.open(message, action, { duration: 3000 });
   }
}
