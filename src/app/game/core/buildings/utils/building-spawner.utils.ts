import { Tile } from '../../map';
import { gameObjectColors } from '../../map/constants';
import { RandomUtils } from '../../utils';
import { Destination } from '../destination.building';
import { Spawner } from '../spawner.building';

export class BuildingSpawnerUtils {
   private static readonly SPAWNER_SPAWNING_CLEAR_RANGE = 3;
   private static readonly DESTINATION_SPAWNING_CLEAR_RANGE = 3;

   public static spawnSpawner(map: Tile[][]): void {
      const upgradableSpawners = Spawner.getUpgradeable();

      if (Spawner.canUpgrade() && upgradableSpawners.length && RandomUtils.nextChance()) {
         const spawner = RandomUtils.nextArrayElement(upgradableSpawners);
         spawner.upgrade();
         return;
      }

      const possibleLocations = this.getAvailableBuildingLocations(map, BuildingSpawnerUtils.SPAWNER_SPAWNING_CLEAR_RANGE);
      const location = RandomUtils.nextArrayElement(possibleLocations);
      const spawner = new Spawner(location, RandomUtils.nextArrayElement(gameObjectColors));
      location.build(spawner);
   }

   public static spawnDestination(tiles: Tile[][]): void {
      const possibleLocations = this.getAvailableBuildingLocations(tiles, BuildingSpawnerUtils.DESTINATION_SPAWNING_CLEAR_RANGE);
      const location = RandomUtils.nextArrayElement(possibleLocations);
      const destination = new Destination(location, RandomUtils.nextArrayElement(gameObjectColors));
      location.build(destination);
   }

   private static getAvailableBuildingLocations(tiles: Tile[][], clearRange: number, strictMode = false): Tile[] {
      const availableLocations: Tile[] = [];

      for (let x = 0; x < tiles.length; x++) {
         for (let y = 0; y < tiles[x].length; y++) {
            if (tiles[x][y].hasBuilding()) {
               continue;
            }

            let clear = true;
            for (let i = -clearRange; i <= clearRange; i++) {
               for (let j = -clearRange; j <= clearRange; j++) {
                  if (x + i < 0 || x + i >= tiles.length || y + j < 0 || y + j >= tiles[x].length) {
                     continue;
                  }
                  if (
                     (!strictMode && tiles[x + i][y + j].hasBuilding()) ||
                     (strictMode && tiles[x + i][y + j].hasInDestructibleBuilding())
                  ) {
                     clear = false;
                     break;
                  }
               }
               if (!clear) {
                  break;
               }
            }
            if (clear) {
               availableLocations.push(tiles[x][y]);
            }
         }
      }

      if (availableLocations.length < tiles.flat().length / 8) {
         if (!strictMode) {
            return this.getAvailableBuildingLocations(tiles, clearRange + 1, true);
         } else if (clearRange > 1) {
            return this.getAvailableBuildingLocations(tiles, clearRange - 1, strictMode);
         }
      }

      return availableLocations;
   }
}
