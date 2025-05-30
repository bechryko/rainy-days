import { BasicDrawer } from '../drawing';
import { ConstantUtils } from '../utils';
import { Direction } from './models';
import { Tile } from './tile';
import { ColorUtils, DirectionUtils, SystemColorToken } from './utils';

export class Car {
   private static readonly pool: Car[] = [];

   private static readonly SIZE_TILE_RATIO = 0.25;
   private static readonly COLLISION_DISTANCE = 0.2;
   private static readonly OFFROAD_SPEED_MULTIPLIER = 0.25;

   private static get SIZE(): number {
      return ConstantUtils.unit(this.SIZE_TILE_RATIO);
   }

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
      if ((car1.x - car2.x) ** 2 + (car1.y - car2.y) ** 2 <= Car.COLLISION_DISTANCE ** 2) {
         Car.pool.splice(Car.pool.indexOf(car1), 1);
         Car.pool.splice(Car.pool.indexOf(car2), 1);
      }
   }

   private x: number;
   private y: number;
   private readonly destinationTile: { x: number; y: number };
   private currentDirection = Direction.UP;
   private locked = false;
   private moved = false;

   constructor(
      spawnTile: Tile,
      public color: string
   ) {
      this.x = spawnTile.x + 0.5;
      this.y = spawnTile.y + 0.5;
      this.destinationTile = { x: spawnTile.x, y: spawnTile.y };
      spawnTile.tileAction(this);
      Car.pool.push(this);
   }

   public getTile(map: Tile[][]): Tile {
      return map[Math.floor(this.x)][Math.floor(this.y)];
   }

   public setDestinationIn(direction: Direction): void {
      if (this.moved) {
         return;
      }

      this.currentDirection = direction;
      this.destinationTile.x += DirectionUtils.getDx(direction);
      this.destinationTile.y += DirectionUtils.getDy(direction);
   }

   public destroy(): void {
      Car.pool.splice(Car.pool.indexOf(this), 1);
   }

   private tick(deltaTime: number, tiles: Tile[][]): void {
      this.move(deltaTime, tiles);
      this.getTile(tiles).tileAction(this);
   }

   private draw(drawer: BasicDrawer): void {
      drawer.circle(
         ConstantUtils.unit(this.x),
         ConstantUtils.unit(this.y),
         Car.SIZE / 2,
         ColorUtils.getTokenValue(SystemColorToken.CAR_OUTLINE)
      );
      drawer.circle(ConstantUtils.unit(this.x), ConstantUtils.unit(this.y), Car.SIZE / 2.5, this.color);
   }

   private move(deltaTime: number, tiles: Tile[][]): void {
      if (this.locked) {
         if (!this.canEscapeTile(tiles)) {
            return;
         }
         this.locked = false;
      }

      const destinationCoords = {
         x: this.destinationTile.x + 0.5,
         y: this.destinationTile.y + 0.5
      };
      const oldDistanceFromDestination =
         Math.abs(this.x - destinationCoords.x) + Math.abs(this.y - destinationCoords.y);
      const distanceMoved = this.getTileSpeedMultiplier(tiles) * deltaTime;
      this.x += DirectionUtils.getDx(this.currentDirection) * distanceMoved;
      this.y += DirectionUtils.getDy(this.currentDirection) * distanceMoved;

      if (
         Math.abs(this.x - destinationCoords.x) + Math.abs(this.y - destinationCoords.y) >=
         oldDistanceFromDestination
      ) {
         this.x = destinationCoords.x;
         this.y = destinationCoords.y;

         if (!this.canEscapeTile(tiles)) {
            this.locked = true;
         } else {
            this.searchNewDestination(tiles);
         }
      }

      this.moved = true;
   }

   private searchNewDestination(tiles: Tile[][]): void {
      let newDirection = DirectionUtils.getOpposite(this.currentDirection);

      let direction = DirectionUtils.turnRightFrom(this.currentDirection);
      for (let d = 0; d < 3; d++, direction = DirectionUtils.turnLeftFrom(direction)) {
         const targetX = this.destinationTile.x + DirectionUtils.getDx(direction);
         const targetY = this.destinationTile.y + DirectionUtils.getDy(direction);
         const targetTile = tiles[targetX]?.[targetY];

         if (targetTile && targetTile.isUnlocked(this, tiles)) {
            newDirection = direction;
            break;
         }
      }

      this.currentDirection = newDirection;
      this.destinationTile.x += DirectionUtils.getDx(this.currentDirection);
      this.destinationTile.y += DirectionUtils.getDy(this.currentDirection);
   }

   private canEscapeTile(tiles: Tile[][]): boolean {
      let canEscape = false;
      this.getTile(tiles).forEachNeighbor(neighbor => {
         if (neighbor.isUnlocked(this, tiles)) {
            canEscape = true;
         }
      });
      return canEscape;
   }

   private getTileSpeedMultiplier(tiles: Tile[][]): number {
      return this.getTile(tiles).road?.speedMultiplier ?? Car.OFFROAD_SPEED_MULTIPLIER;
   }
}
