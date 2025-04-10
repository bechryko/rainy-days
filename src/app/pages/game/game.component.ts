import { Component, EventEmitter, inject } from '@angular/core';
import { GameMessage, GameStatus, InputMessage } from './model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewEncapsulation } from '@angular/core';
import { HudComponent } from './hud/hud.component';
import { NgClass } from '@angular/common';
import { MapComponent } from './map/map.component';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
    imports: [HudComponent, NgClass, MapComponent]
})
export class GameComponent {
   private snackbar = inject(MatSnackBar);

   gameStatus: GameStatus = {
      isGameGoing: false,
      isPaused: false,
      selected: 0,
      score: 0,
      spawnTimer: 0
   };
   inputEmitter = new EventEmitter<InputMessage>();

   getGameMessage(message: any) {
      message = message as GameMessage;
      switch (message.type) {
         case "isGameGoing":
            this.gameStatus.isGameGoing = message.data;
            break;
         case "isPaused":
            this.gameStatus.isPaused = message.data;
            break;
         case "selected":
            this.gameStatus.selected = message.data;
            break;
         case "score":
            this.gameStatus.score = message.data;
            break;
         case "spawnTimer":
            if(this.gameStatus.spawnTimer > 10 && message.data <= 10) {
               this.snackbarMessage(`New spawner and destination spawns in ${message.data} seconds`, 'Understood');
            }
            this.gameStatus.spawnTimer = message.data;
            break;
         case "destinationHealth":
            this.snackbarMessage(`One of your destinations has ${message.data} health!`, "I'll fix it!");
            //this.pauseGame();
            break;
      }
   }

   getInputMessage(message: any) {
      message = message as InputMessage;
      this.inputEmitter.emit(message);
   }

   snackbarMessage(message: string, action: string) {
      this.snackbar.open(message, action, { duration: 3000 });
   }

   pauseGame() {
      this.inputEmitter.emit({ type: "pause", data: true });
      this.gameStatus.isPaused = true;
   }
}
