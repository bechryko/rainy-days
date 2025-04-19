import { BuildingSpawnerUtils } from '../buildings/utils';
import { BasicDrawer } from '../drawing';
import { RandomUtils } from '../utils';
import { Car } from './car';
import { Tile } from './tile';
import { ColorUtils, SystemColorToken } from './utils';

export class Map {
   public static readonly ROW_COUNT = 15;
   public static readonly COLUMN_COUNT = 30;
   private static readonly MIN_CLOUD_COVERAGE_RATIO = 0.6;
   private static readonly MAX_CLOUD_COVERAGE_RATIO = 0.7;
   private static readonly CLOUD_SIZE_GROWTH_CHANCE_CONSTANT = 0.4;

   private readonly tiles: Tile[][] = [];

   constructor() {
      this.initTiles();
      this.spread();
   }

   public tick(deltaTime: number): void {
      this.forEachTile(tile => tile.tick(deltaTime));
      Car.tickAll(deltaTime, this.tiles);
   }

   public spawnSpawnerAndDestination(): void {
      BuildingSpawnerUtils.spawnSpawner(this.tiles);
      BuildingSpawnerUtils.spawnDestination(this.tiles);
   }

   public draw(drawer: BasicDrawer): void {
      drawer.clear();
      this.forEachTile(tile => tile.draw(drawer));
      this.drawMapGrid(drawer);
      this.forEachTile(tile => tile.drawRoad(drawer));
      Car.drawAll(drawer);
      this.forEachTile(tile => tile.drawBuilding(drawer));
   }

   private forEachTile(callback: (tile: Tile) => void): void {
      this.tiles.forEach(column => {
         column.forEach(tile => {
            callback(tile);
         });
      });
   }

   private spread(): void {
      const minSpreads = Map.ROW_COUNT * Map.COLUMN_COUNT * Map.MIN_CLOUD_COVERAGE_RATIO;
      const maxSpreads = Map.ROW_COUNT * Map.COLUMN_COUNT * Map.MAX_CLOUD_COVERAGE_RATIO;
      let spreads = 0;

      while (spreads < minSpreads) {
         const spreadList: Tile[] = [this.getRandomTile()];
         const spreadColor = this.chooseSpreadColor();

         while (spreadList.length > 0) {
            const tile = spreadList.splice(0, 1)[0];
            if (tile.color === spreadColor) {
               continue;
            }

            if (tile.color === ColorUtils.getBaseTileColor()) {
               spreads++;
            } else if (RandomUtils.nextChance()) {
               continue;
            }
            tile.color = spreadColor;

            tile.forEachNeighbor(tile => {
               if (RandomUtils.nextChance(Map.CLOUD_SIZE_GROWTH_CHANCE_CONSTANT) && spreads < maxSpreads) {
                  spreadList.push(tile);
               }
            });
         }
      }
   }

   private chooseSpreadColor(): string {
      const colorCountMap: Record<string, number> = {};
      let minColor: string | undefined;

      for (const color of ColorUtils.getGameObjectColors()) {
         colorCountMap[color] = this.tiles.flat().filter(tile => tile.color === color).length;

         if (!minColor || colorCountMap[minColor] > colorCountMap[color]) {
            minColor = color;
         }
      }

      return minColor!;
   }

   private drawMapGrid(drawer: BasicDrawer): void {
      drawer.strokeStyle = ColorUtils.getTokenValue(SystemColorToken.GRID);
      drawer.lineCap = 'square';
      drawer.lineWidth = 1;

      for (let x = 1; x < Map.COLUMN_COUNT; x++) {
         drawer.line(x * Tile.SIZE, 0, x * Tile.SIZE, Map.ROW_COUNT * Tile.SIZE, 1);
      }
      for (let y = 1; y < Map.ROW_COUNT; y++) {
         drawer.line(0, y * Tile.SIZE, Map.COLUMN_COUNT * Tile.SIZE, y * Tile.SIZE, 1);
      }
   }

   private initTiles(): void {
      for (let x = 0; x < Map.COLUMN_COUNT; x++) {
         this.tiles[x] = [];
         for (let y = 0; y < Map.ROW_COUNT; y++) {
            this.tiles[x][y] = new Tile(x, y);
         }
      }

      this.tiles.flat().forEach(tile => tile.assignNeighbors(this.tiles));
   }

   private getRandomTile(): Tile {
      return RandomUtils.nextArrayElement(this.tiles.flat());
   }
}
