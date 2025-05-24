import { Signal } from '@angular/core';
import { NoRoomForSpawnError } from '@rainy-days/shared/errors';
import { GameStatus } from '../models';
import { Destination } from './buildings';
import { Controller } from './control';
import { BasicDrawer } from './drawing';
import { GameEventHandler, GameEventType } from './game-events';
import { Map } from './map/map';
import { GameCleanupUtils } from './utils';

export class Game {
   private static readonly BUILDING_SPAWN_TIMER = 45;

   private readonly drawer: BasicDrawer;
   private readonly controller: Controller;
   private readonly map: Map;
   private spawnTimer = Game.BUILDING_SPAWN_TIMER;
   private exited = false;
   private victory = false;

   constructor(
      canvas: HTMLCanvasElement,
      private readonly status: Signal<GameStatus>
   ) {
      this.map = new Map();
      this.map.spawnSpawnerAndDestination();
      this.controller = new Controller(this.map['tiles']);
      this.drawer = new BasicDrawer(canvas);
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
         GameEventHandler.getInstance().emitEvent(GameEventType.GAME_OVER, this.victory);
         GameEventHandler.getInstance().emitEvent(GameEventType.CLOSE_CONTEXT_MENU, null);
      }
   }

   private main(deltaTime: number): boolean {
      if (!this.status().isPaused) {
         // Tick
         for (let i = 0; i < this.status().gameSpeed; i++) {
            deltaTime = Math.min(deltaTime, 0.1);
            this.timedActions(deltaTime);
            this.map.tick(deltaTime);
         }
      }

      // Mouse actions
      this.controller.handleMouseActions();

      // Draw
      this.map.draw(this.drawer);
      this.controller.draw(this.drawer);

      return this.status().isPaused || !this.isEndOfGame();
   }

   private isEndOfGame(): boolean {
      return Destination.anyWithZeroHealth() || this.victory;
   }

   private timedActions(deltaTime: number): void {
      if ((this.spawnTimer -= deltaTime) <= 0) {
         this.spawnTimer = Game.BUILDING_SPAWN_TIMER;
         try {
            this.map.spawnSpawnerAndDestination();
         } catch (error) {
            if (error instanceof NoRoomForSpawnError) {
               this.victory = true;
            } else {
               throw error;
            }
         }
      }
      GameEventHandler.getInstance().emitEvent(GameEventType.UPDATE_SPAWN_TIMER, Math.floor(this.spawnTimer));
   }
}
