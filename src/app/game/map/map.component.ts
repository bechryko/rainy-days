import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { GameStartService } from "src/app/game-start.service";
import { Game } from "../core/game";
import { GameEventHandler, GameEventType } from "../core/game-events";
import { RandomUtils } from "../core/utils";

@Component({
   selector: 'app-map',
   templateUrl: './map.component.html',
   styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
   private gameStartService = inject(GameStartService);

   game?: Game;

   ngOnInit() {
      document.addEventListener("contextmenu", e => {
         e.preventDefault();
      }, false);
      const parameters = this.gameStartService.getStartingParams();
      const seed = !parameters.seed ? Math.random().toString() : parameters.seed;
      RandomUtils.registerSeed(seed);
      console.log(`Game seed: "${seed}"`)
      this.game = new Game(
         document.getElementById("gameCanvas") as HTMLCanvasElement
      );
      this.startGame();
   }

   ngOnDestroy(): void {
      this.game?.stop();
   }

   public startGame(): void {
      GameEventHandler.getInstance().emitEvent(GameEventType.IS_GAME_GOING, true);
      this.game!.startGame();
   }
}
