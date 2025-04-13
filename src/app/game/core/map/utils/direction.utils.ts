import { Direction } from "../models";

export class DirectionUtils {
   public static forEachDirection(callback: (direction: Direction, dx: number, dy: number, breakFn: () => void) => void): void {
      let doBreak = false;
      const breakFn = () => doBreak = true;

      for(let i = 0; i < 4; i++) {
         callback(i, DirectionUtils.getDx(i), DirectionUtils.getDy(i), breakFn);

         if(doBreak) {
            break;
         }
      }
   }

   public static getNext(direction: Direction): Direction {
      return (direction + 1) % 4;
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
