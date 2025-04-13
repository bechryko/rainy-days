import { BasicDrawer } from '../drawing';
import { RandomUtils } from '../utils/random.utils';
import { Direction } from './models';
import { Tile } from './tile';
import { DirectionUtils } from './utils';

export class Car {
   private static readonly pool: Car[] = [];
   public static readonly SPEED = 1;
   public static readonly SIZE = 12.5;

   public static tickAll(deltaTime: number, tiles: Tile[][]): void {
      this.pool.forEach(car => car.tick(deltaTime, tiles));

      this.pool.forEach(car1 => {
         this.pool.forEach(car2 => {
            if (car1 === car2) {
               return;
            }
            Car.checkCollision(car1, car2);
         });
      });
   }

   public static drawAll(drawer: BasicDrawer): void {
      this.pool.forEach(car => car.draw(drawer));
   }

   public static checkCollision(car1: Car, car2: Car): void {
      if ((car1.x - car2.x) ** 2 + (car1.y - car2.y) ** 2 <= Car.SIZE ** 2) {
         Car.pool.splice(Car.pool.indexOf(car1), 1);
         Car.pool.splice(Car.pool.indexOf(car2), 1);
      }
   }

   private x: number;
   private y: number;
   private readonly destination = { tileX: 0, tileY: 0 };
   private lastDirection = Direction.UP;

   constructor(
      spawnTile: Tile,
      public color: string
   ) {
      this.x = (spawnTile.x + 0.5) * Tile.SIZE;
      this.y = (spawnTile.y + 0.5) * Tile.SIZE;
      this.destination.tileX = spawnTile.x;
      this.destination.tileY = spawnTile.y;
      spawnTile.tileAction(this);
      Car.pool.push(this);
   }

   public getTile(map: Tile[][]): Tile {
      const tile = map[Math.floor(this.x / Tile.SIZE)]?.[Math.floor(this.y / Tile.SIZE)];
      if (!tile) {
         console.log(`${this.x} -> ${Math.floor(this.x / Tile.SIZE)}`, `${this.y} -> ${Math.floor(this.y / Tile.SIZE)}`);
      }
      return map[Math.floor(this.x / Tile.SIZE)][Math.floor(this.y / Tile.SIZE)];
   }

   public destroy(): void {
      Car.pool.splice(Car.pool.indexOf(this), 1);
   }

   private tick(deltaTime: number, tiles: Tile[][]): void {
      this.move(deltaTime, tiles);
      this.getTile(tiles).tileAction(this);
   }

   private draw(drawer: BasicDrawer): void {
      drawer.circle(this.x, this.y, Car.SIZE / 2, 'black');
      drawer.circle(this.x, this.y, Car.SIZE / 2.5, this.color);
   }

   private move(deltaTime: number, map: Tile[][]): void {
      const dest = {
         x: (this.destination.tileX + 0.5) * Tile.SIZE,
         y: (this.destination.tileY + 0.5) * Tile.SIZE
      };
      const distance = Math.abs(this.x - dest.x) + Math.abs(this.y - dest.y);
      const moved = Car.SPEED * Tile.SIZE * deltaTime;
      this.x += DirectionUtils.getDx(this.lastDirection) * moved;
      this.y += DirectionUtils.getDy(this.lastDirection) * moved;
      if (Math.abs(this.x - dest.x) + Math.abs(this.y - dest.y) >= distance) {
         this.x = dest.x;
         this.y = dest.y;
         this.searchNewDestination(map);
      }
   }

   private searchNewDestination(tiles: Tile[][]): void {
      const possibleDirections = [];
      let direction = Direction.RIGHT;
      for (let d = 0; d < 4; d++, direction = DirectionUtils.getNext(direction)) {
         const targetX = this.destination.tileX + DirectionUtils.getDx(direction);
         const targetY = this.destination.tileY + DirectionUtils.getDy(direction);
         const targetTile = tiles[targetX]?.[targetY];
         if (targetTile && targetTile.isUnlocked(this, tiles)) {
            possibleDirections.push(direction);
         }
      }
      if (possibleDirections.length == 0) {
         // this.lastDirection = Direction.NONE;
         return;
      } else if (possibleDirections.length !== 1 && possibleDirections.includes(DirectionUtils.getOpposite(this.lastDirection))) {
         possibleDirections.splice(possibleDirections.indexOf(DirectionUtils.getOpposite(this.lastDirection)), 1);
      }
      this.lastDirection = RandomUtils.nextArrayElement(possibleDirections); // TODO: right
      this.destination.tileX += DirectionUtils.getDx(this.lastDirection);
      this.destination.tileY += DirectionUtils.getDy(this.lastDirection);
   }
}
