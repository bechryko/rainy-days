import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from './core';
import { GameEventHandler, GameEventType } from './core/game-events';
import { MapComponent } from './game-area/game-area.component';
import { GameStatus } from './model';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
   selector: 'rd-game',
   templateUrl: './game.component.html',
   styleUrls: ['./game.component.scss'],
   imports: [ToolbarComponent, NgClass, MapComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
   private snackbar = inject(MatSnackBar);

   public readonly gameStatus = signal<GameStatus>({
      isGameGoing: false,
      isPaused: false,
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
         if (this.gameStatus().spawnTimer > Game.BUILDING_SPAWN_MESSAGE_TIME && timer <= Game.BUILDING_SPAWN_MESSAGE_TIME) {
            this.snackbarMessage(`New spawner and destination spawns in ${timer} seconds`, 'Understood');
         }
         this.gameStatus.update(status => ({
            ...status,
            spawnTimer: timer
         }));
      });
      GameEventHandler.getInstance().watchEvents(GameEventType.DESTINATION_CRITICAL_HEALTH, health => {
         this.snackbarMessage(`One of your destinations has ${health} health!`, "I'll fix it!");
      });
   }

   snackbarMessage(message: string, action: string) {
      this.snackbar.open(message, action, { duration: 3000 });
   }
}
