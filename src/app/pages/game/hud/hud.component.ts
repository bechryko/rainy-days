import { GameStatus } from './../model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputMessage } from '../model';
import { NgClass } from '@angular/common';
import { MatFabButton, MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-hud',
    templateUrl: './hud.component.html',
    styleUrls: ['./hud.component.scss'],
    imports: [NgClass, MatFabButton, MatTooltip, MatButton]
})
export class HudComponent {
   @Input() gameStatus: GameStatus = {
      isGameGoing: false,
      isPaused: false,
      selected: 1,
      score: 0,
      spawnTimer: 0
   };
   @Output() inputEmitter = new EventEmitter<InputMessage>();
   buttons = [
      "editorTool",
      "road",
      "tunnel",
      "gate1",
      "gate2",
      "timedgate"
   ];

   restartGame() {
      window.location.reload();
   }

   selectTool(number: number) {
      this.inputEmitter.emit({ type: "selectTool", data: number });
   }
}
