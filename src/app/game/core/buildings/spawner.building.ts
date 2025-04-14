import { BasicDrawer } from '../drawing';
import { Tile } from '../map';
import { Car } from '../map/car';
import { Color } from '../map/models';
import { DirectionUtils } from '../map/utils';
import { Building } from './building';

export class Spawner extends Building {
   private static readonly list: Spawner[] = [];

   public static readonly GENERAL_CAR_SPAWN_TIMER = 4;
   private static readonly NUMBER_TO_START_UPGRADING = 5;
   private static readonly MAX_POWER = 3;

   public static getUpgradeable(): Spawner[] {
      return Spawner.list.filter(spawner => spawner.power < Spawner.MAX_POWER);
   }

   public static canUpgrade(): boolean {
      return Spawner.list.length > Spawner.NUMBER_TO_START_UPGRADING;
   }

   private timer = 0;
   private power = 1;

   constructor(
      tile: Tile,
      private readonly color: Color
   ) {
      super(tile, false);

      Spawner.list.push(this);
   }

   public upgrade(): void {
      this.power++;
   }

   public tick(deltaTime: number): void {
      if (!this.tile.hasRoad()) {
         return;
      }

      this.timer -= deltaTime * this.power;
      if (this.timer < 0) {
         this.timer = Spawner.GENERAL_CAR_SPAWN_TIMER;
         const car = new Car(this.tile, this.color);

         DirectionUtils.forEachDirection((direction, _x, _y, breakFn) => {
            const neighbor = this.tile.getTileInDirection(direction);
            if (neighbor && neighbor.isUnlocked(car, this.tile)) {
               car.setDestinationIn(direction);
               breakFn();
            }
         });
      }
   }

   public override draw(drawer: BasicDrawer): void {
      drawer.lineWidth = 2;

      drawer.circle((this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE / 4, this.color);
      const circleSizeIncrease = Tile.SIZE / 4 / Spawner.MAX_POWER;
      for (let i = 0; i < this.power; i++) {
         drawer.circle(
            (this.tile.x + 0.5) * Tile.SIZE,
            (this.tile.y + 0.5) * Tile.SIZE,
            Tile.SIZE / 4 + i * circleSizeIncrease,
            'black',
            false
         );
      }
      drawer.text(Math.ceil(this.timer) + 's', (this.tile.x + 0.5) * Tile.SIZE, (this.tile.y + 0.5) * Tile.SIZE, Tile.SIZE * 0.35);
   }
}
