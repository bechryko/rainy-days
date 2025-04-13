import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Toolbar } from '../core/control/toolbar';
import { GameStatus } from './../model';

@Component({
   selector: 'app-hud',
   templateUrl: './hud.component.html',
   styleUrls: ['./hud.component.scss'],
   imports: [NgClass, MatFabButton, MatTooltip, MatButton]
})
export class HudComponent {
   public readonly gameStatus = input.required<GameStatus>();

   public readonly toolbar = Toolbar.inject();

   public restartGame(): void {
      window.location.reload();
   }

   public selectTool(number: number): void {
      this.toolbar()!.selectItemByKey(number);
   }
}
