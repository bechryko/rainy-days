import { Direction } from '../models';

interface ForEachDirectionConfig {
   counterclockwise?: boolean;
   startingDirection?: Direction;
}

export class DirectionUtils {
   public static forEachDirection(
      callback: (direction: Direction, dx: number, dy: number, breakFn: () => void) => void,
      config?: ForEachDirectionConfig
   ): void {
      let doBreak = false;
      const breakFn = () => (doBreak = true);

      for (
         let dir = config?.startingDirection ?? Direction.UP, i = 0;
         i < 4;
         dir = Boolean(config?.counterclockwise) ? this.turnLeftFrom(dir) : this.turnRightFrom(dir), i++
      ) {
         callback(dir, DirectionUtils.getDx(dir), DirectionUtils.getDy(dir), breakFn);

         if (doBreak) {
            break;
         }
      }
   }

   public static turnRightFrom(direction: Direction): Direction {
      return (direction + 1) % 4;
   }

   public static turnLeftFrom(direction: Direction): Direction {
      return (direction + 3) % 4;
   }

   public static getOpposite(direction: Direction): Direction {
      return (direction + 2) % 4;
   }

   public static getDx(direction: Direction): number {
      return [0, 1, 0, -1][direction];
   }

   public static getDy(direction: Direction): number {
      return [-1, 0, 1, 0][direction];
   }
}
