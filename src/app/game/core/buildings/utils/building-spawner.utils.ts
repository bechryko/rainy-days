import { Tile } from '../../map';
import { Map } from '../../map/map';
import { ColorUtils, DirectionUtils } from '../../map/utils';
import { RandomUtils } from '../../utils';
import { Destination } from '../destination.building';
import { Spawner } from '../spawner.building';

export class BuildingSpawnerUtils {
   private static readonly SPAWNER_SPAWNING_CLEAR_RANGE = 5;
   private static readonly DESTINATION_SPAWNING_CLEAR_RANGE = 5;
   private static readonly SPAWNING_PADDING = 4;

   public static spawnSpawner(tiles: Tile[][], enablePaddingFilter: boolean): void {
      const possibleLocations = this.getAvailableBuildingLocationsWithIterativelySmallerClearRange(
         tiles,
         BuildingSpawnerUtils.SPAWNER_SPAWNING_CLEAR_RANGE,
         enablePaddingFilter
      );
      const location = RandomUtils.nextArrayElement(possibleLocations);
      const spawner = new Spawner(location, ColorUtils.getRandomGameObjectColor());
      location.build(spawner);
   }

   public static spawnDestination(tiles: Tile[][], enablePaddingFilter: boolean): void {
      const possibleLocations = this.getAvailableBuildingLocationsWithIterativelySmallerClearRange(
         tiles,
         BuildingSpawnerUtils.DESTINATION_SPAWNING_CLEAR_RANGE,
         enablePaddingFilter
      );
      const location = RandomUtils.nextArrayElement(possibleLocations);

      const possibleColors = [...ColorUtils.getGameObjectColors()].filter(color => color !== location.color);
      const color = RandomUtils.nextArrayElement(possibleColors);

      const destination = new Destination(location, color);
      location.build(destination);
   }

   private static getAvailableBuildingLocationsWithIterativelySmallerClearRange(
      tiles: Tile[][],
      startingClearRange: number,
      enablePaddingFilter: boolean
   ): Tile[] {
      for (let clearRange = startingClearRange; clearRange > 1; clearRange--) {
         const availableTiles = this.getAvailableBuildingLocations(tiles, clearRange);
         if (availableTiles.length > 0) {
            if (enablePaddingFilter) {
               const paddingFilteredTiles = this.filterTilesInPadding(availableTiles);
               if (paddingFilteredTiles.length > 0) {
                  return paddingFilteredTiles;
               }
            }
            return availableTiles;
         }
      }

      throw new Error('No available tiles for spawning!');
   }

   private static getAvailableBuildingLocations(tiles: Tile[][], clearRange: number): Tile[] {
      const availableTiles: Tile[] = [];

      const tileDistancesFromSpawnedBuildings = this.getTileDistancesFromSpawnedBuildings(tiles);
      tiles.forEach((column, x) => {
         column.forEach((tile, y) => {
            if (tileDistancesFromSpawnedBuildings[x][y] > clearRange) {
               availableTiles.push(tile);
            }
         });
      });

      return availableTiles;
   }

   private static getTileDistancesFromSpawnedBuildings(tiles: Tile[][]): number[][] {
      const distances: number[][] = Array.from({ length: Map.COLUMN_COUNT }, () =>
         Array.from({ length: Map.ROW_COUNT }, () => Infinity)
      );
      const spawnedBuildingTiles = tiles.flat().filter(tile => tile.hasSpawnedBuilding());
      spawnedBuildingTiles.forEach(tile => {
         this.setDistances(distances, tile.x, tile.y, 0);
      });
      return distances;
   }

   private static setDistances(distances: number[][], x: number, y: number, distance: number): void {
      if (x < 0 || x >= Map.COLUMN_COUNT || y < 0 || y >= Map.ROW_COUNT || distances[x][y] <= distance) {
         return;
      }

      distances[x][y] = distance;

      DirectionUtils.forEachDirection((_, dx, dy) => {
         this.setDistances(distances, x + dx, y + dy, distance + 1);
      });
   }

   private static filterTilesInPadding(tiles: Tile[]): Tile[] {
      return tiles.filter(
         tile =>
            tile.x >= this.SPAWNING_PADDING &&
            tile.x < Map.COLUMN_COUNT - this.SPAWNING_PADDING &&
            tile.y >= this.SPAWNING_PADDING &&
            tile.y < Map.ROW_COUNT - this.SPAWNING_PADDING
      );
   }
}
