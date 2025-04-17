import { Signal } from '@angular/core';
import { Building, Destination } from './buildings';
import { Controller } from './control';
import { BasicDrawer } from './drawing';
import { GameEventHandler, GameEventType } from './game-events';
import { Map } from './map/map';
import { GameCleanupUtils } from './utils';

export class Game {
   public static readonly BUILDING_SPAWN_MESSAGE_TIME = 10;
   public static readonly DESTINATION_CRITICAL_HEALTH = 15;

   private readonly drawer: BasicDrawer;
   private readonly controller: Controller;
   private readonly map: Map;
   private spawnTimer = 0;
   public paused = false;
   private exited = false;

   constructor(
      canvas: HTMLCanvasElement,
      private readonly gameSpeed: Signal<number>
   ) {
      this.map = new Map();
      this.controller = new Controller(this.map['tiles']);
      this.drawer = new BasicDrawer(canvas);

      GameEventHandler.getInstance().watchEvents(GameEventType.TOGGLE_PAUSE, () => (this.paused = !this.paused));
   }

   public startGame(): void {
      this.controller.registerEventListeners();
      this.gameInterval(Date.now());
   }

   public onResize(): void {
      this.drawer.onResize();
   }

   public stop(): void {
      this.exited = true;
      GameCleanupUtils.cleanUp();
   }

   private gameInterval(time: number): void {
      const currentTime = Date.now();
      const deltaTime = currentTime - time;
      if (this.main(deltaTime / 1000) && !this.exited) {
         requestAnimationFrame(() => this.gameInterval(currentTime));
      } else {
         this.controller.unregisterEventListeners();
         GameEventHandler.getInstance().emitEvent(GameEventType.IS_GAME_GOING, false);
      }
   }

   private main(deltaTime: number): boolean {
      if (!this.paused) {
         for (let i = 0; i < this.gameSpeed(); i++) {
            deltaTime = Math.min(deltaTime, 0.1);
            this.timedActions(deltaTime);
            this.map.tick(deltaTime);
         }
      }
      // Mouse actions
      this.controller.handleMouseActions();
      // Draw
      this.map.draw(this.drawer);
      return this.paused || !Destination.anyWithZeroHealth();
   }

   private timedActions(deltaTime: number): void {
      if ((this.spawnTimer -= deltaTime) < 0) {
         this.spawnTimer = Building.MAIN_SPAWN_TIMER;
         this.map.spawnSpawnerAndDestination();
      }
      GameEventHandler.getInstance().emitEvent(GameEventType.UPDATE_SPAWN_TIMER, Math.floor(this.spawnTimer));
   }
}
