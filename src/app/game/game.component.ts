import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameEventHandler, GameEventType } from '@rainy-days/core/game-events';
import { StorageID, StorageService } from '@rainy-days/shared/services';
import { filter, map, pairwise } from 'rxjs';
import { GameStartService } from '../game-start.service';
import { EndOfGameDialogData } from './end-of-game-dialog/end-of-game-dialog-data';
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
   private static readonly BUILDING_SPAWN_MESSAGE_TIME = 10;

   private readonly snackbar = inject(MatSnackBar);
   private readonly dialog = inject(MatDialog);
   private readonly gameStartService = inject(GameStartService);
   private readonly storageService = inject(StorageService);

   public readonly gameStatus: WritableSignal<GameStatus>;
   public seed: string;
   private isNewBest = false;

   constructor() {
      this.seed = this.getSeed();

      const gameSpeed = this.storageService.read(StorageID.GAME_SPEED);
      this.gameStatus = signal<GameStatus>({
         isGameGoing: false,
         isVictory: false,
         isPaused: gameSpeed > 2,
         gameSpeed,
         selectedToolbarItem: 0,
         score: 0,
         spawnTimer: 0
      });

      GameEventHandler.getInstance().watchEvents(GameEventType.START_GAME, () =>
         this.gameStatus.update(status => ({
            ...status,
            isGameGoing: true
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
            this.gameStatus().spawnTimer > GameComponent.BUILDING_SPAWN_MESSAGE_TIME &&
            timer <= GameComponent.BUILDING_SPAWN_MESSAGE_TIME
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
      GameEventHandler.getInstance().watchEvents(GameEventType.GAME_OVER, isVictory =>
         this.gameStatus.update(status => ({
            ...status,
            isGameGoing: false,
            isVictory
         }))
      );

      toObservable(this.gameStatus)
         .pipe(
            map(status => status.isGameGoing),
            pairwise(),
            filter(([oldIsGameGoing, newIsGameGoing]) => oldIsGameGoing !== newIsGameGoing && !newIsGameGoing),
            takeUntilDestroyed()
         )
         .subscribe(() => this.onEndOfGame());
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
         this.storageService.save(StorageID.GAME_SPEED, gameSpeed);
      }
   }

   public onEndOfGame(): void {
      const score = this.gameStatus().score;
      if (score > this.storageService.read(StorageID.PERSONAL_BEST).score) {
         this.storageService.save(StorageID.PERSONAL_BEST, {
            score,
            timestamp: Date.now()
         });
         this.isNewBest = true;
      }

      this.openEndOfGameDialog();
   }

   public openEndOfGameDialog(): void {
      const data: EndOfGameDialogData = {
         score: this.gameStatus().score,
         best: this.storageService.read(StorageID.PERSONAL_BEST).score,
         isNewBest: this.isNewBest,
         isVictory: this.gameStatus().isVictory,
         seed: this.seed
      };

      this.dialog.open(EndOfGameDialogComponent, { data });
   }

   public openSnackbarMessage(message: string, action: string): void {
      this.snackbar.open(message, action, { duration: 3000 });
   }

   private getSeed(): string {
      const seed = this.gameStartService.getStartingParams().seed;
      return seed ? seed : Math.random().toString();
   }
}
