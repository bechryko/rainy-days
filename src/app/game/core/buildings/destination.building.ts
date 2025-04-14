import { BasicDrawer } from '../drawing';
import { Game } from '../game';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { Color } from '../map/models';
import { Building } from './building';

export class Destination extends Building {
   private static readonly list: Destination[] = [];

   public static readonly STARTING_HEALTH = 45;
   public static readonly HEALTH_INCREASE = 1;
   public static readonly HEALING_PER_CAR = 5;

   private static CURRENT_HEALTH = Destination.STARTING_HEALTH;

   public static anyWithZeroHealth(): boolean {
      return Destination.list.some(destination => destination.health <= 0);
   }

   private health: number;

   constructor(
      tile: Tile,
      public readonly color: Color
   ) {
      super(tile, false);

      this.health = Destination.CURRENT_HEALTH;
      Destination.CURRENT_HEALTH += Destination.HEALTH_INCREASE;
      Destination.list.push(this);
   }

   public tick(deltaTime: number): void {
      const oldHealth = this.health;
      this.health -= deltaTime;

      if (this.health < Game.DESTINATION_CRITICAL_HEALTH && oldHealth >= Game.DESTINATION_CRITICAL_HEALTH) {
         GameEventHandler.getInstance().emitEvent(GameEventType.DESTINATION_CRITICAL_HEALTH, Game.DESTINATION_CRITICAL_HEALTH);
      }
   }

   public heal(): void {
      this.health += Destination.HEALING_PER_CAR;
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.circle((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE / 2);
      drawer.circle((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE / 2.2, this.color);
      drawer.text(Math.ceil(this.health) + 's', (this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE * 0.45);
   }
}
