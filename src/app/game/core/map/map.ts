import { BuildingSpawnerUtils } from '../buildings/utils';
import { BasicDrawer } from '../drawing';
import { ConstantUtils, RandomUtils } from '../utils';
import { Car } from './car';
import { Tile } from './tile';
import { ColorUtils, SystemColorToken } from './utils';

interface ColorCountObject {
   color: string;
   count: number;
}

export class Map {
   private static readonly MIN_CLOUD_COVERAGE_RATIO = 0.6;
   private static readonly MAX_CLOUD_COVERAGE_RATIO = 0.65;
   private static readonly MIN_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT = 0.4;
   private static readonly MAX_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT = 0.45;
   private static readonly MIN_COLOR_COUNT = 10;
   private static readonly MAX_COLOR_INCREASE_COUNT = Infinity;
   private static readonly PADDING_FILTER_PAIR_LIMIT = 3;

   private readonly tiles: Tile[][] = [];
   private spawnerAndDestinationPairs = 0;

   constructor() {
      this.initTiles();
      this.initTileColors();
   }

   public tick(deltaTime: number): void {
      this.forEachTile(tile => tile.tick(deltaTime));
      Car.tickAll(deltaTime, this.tiles);
   }

   public spawnSpawnerAndDestination(): void {
      const enablePaddingFilter = this.spawnerAndDestinationPairs < Map.PADDING_FILTER_PAIR_LIMIT;
      BuildingSpawnerUtils.spawnSpawner(this.tiles, enablePaddingFilter);
      BuildingSpawnerUtils.spawnDestination(this.tiles, enablePaddingFilter);

      this.spawnerAndDestinationPairs++;
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

   private initTileColors(): void {
      const minSpreads = ConstantUtils.ROW_COUNT * ConstantUtils.COLUMN_COUNT * Map.MIN_CLOUD_COVERAGE_RATIO;
      const maxSpreads = ConstantUtils.ROW_COUNT * ConstantUtils.COLUMN_COUNT * Map.MAX_CLOUD_COVERAGE_RATIO;
      let spreads = 0;

      while (spreads < minSpreads) {
         spreads += this.spread(this.chooseSpreadColor(), this.getRandomGrowthChanceConstant(), maxSpreads - spreads);
      }

      let minColorCountObject: ColorCountObject;
      while ((minColorCountObject = this.getColorCounts()[0]).count < Map.MIN_COLOR_COUNT) {
         this.spread(
            minColorCountObject.color,
            this.getRandomGrowthChanceConstant(),
            Map.MAX_COLOR_INCREASE_COUNT,
            true
         );
      }
   }

   private spread(
      color: string,
      growthChanceConstant: number,
      spreadsLeft: number,
      spreadOnColoredTiles = false
   ): number {
      const spreadList: Tile[] = [this.getRandomTile(spreadOnColoredTiles)];
      let spreads = 0;

      while (spreadList.length > 0) {
         const tile = spreadList.splice(0, 1)[0];
         if (tile.color === color) {
            continue;
         }

         const isColored = tile.color !== ColorUtils.getBaseTileColor();
         if (spreadOnColoredTiles !== isColored) {
            continue;
         }

         tile.color = color;
         spreads++;

         tile.forEachNeighbor(tile => {
            if (spreads < spreadsLeft && RandomUtils.nextChance(growthChanceConstant)) {
               spreadList.push(tile);
            }
         });
      }

      return spreads;
   }

   private chooseSpreadColor(): string {
      return RandomUtils.nextArrayElement(ColorUtils.getGameObjectColors());
   }

   private drawMapGrid(drawer: BasicDrawer): void {
      drawer.strokeStyle = ColorUtils.getTokenValue(SystemColorToken.GRID);
      drawer.lineCap = 'square';
      drawer.lineWidth = 1;

      for (let x = 1; x < ConstantUtils.COLUMN_COUNT; x++) {
         drawer.line(ConstantUtils.unit(x), 0, ConstantUtils.unit(x), ConstantUtils.unit(ConstantUtils.ROW_COUNT), 1);
      }
      for (let y = 1; y < ConstantUtils.ROW_COUNT; y++) {
         drawer.line(
            0,
            ConstantUtils.unit(y),
            ConstantUtils.unit(ConstantUtils.COLUMN_COUNT),
            ConstantUtils.unit(y),
            1
         );
      }
   }

   private initTiles(): void {
      for (let x = 0; x < ConstantUtils.COLUMN_COUNT; x++) {
         this.tiles[x] = [];
         for (let y = 0; y < ConstantUtils.ROW_COUNT; y++) {
            this.tiles[x][y] = new Tile(x, y);
         }
      }

      this.tiles.flat().forEach(tile => tile.assignNeighbors(this.tiles));
   }

   private getColorCounts(): ColorCountObject[] {
      const counts = ColorUtils.getGameObjectColors().reduce<ColorCountObject[]>(
         (acc, color) => [...acc, { color, count: 0 }],
         []
      );

      this.tiles.flat().forEach(tile => {
         const countObject = counts.find(c => c.color === tile.color);
         if (countObject) {
            countObject.count++;
         }
      });

      counts.sort((c1, c2) => c1.count - c2.count);
      return counts;
   }

   private getRandomGrowthChanceConstant(): number {
      return RandomUtils.between(Map.MIN_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT, Map.MAX_CLOUD_SIZE_GROWTH_CHANCE_CONSTANT);
   }

   private getRandomTile(isColored: boolean): Tile {
      const baseTileColor = ColorUtils.getBaseTileColor();
      const condition = isColored
         ? (tile: Tile) => tile.color !== baseTileColor
         : (tile: Tile) => tile.color === baseTileColor;
      return RandomUtils.nextArrayElement(this.tiles.flat().filter(condition));
   }
}
