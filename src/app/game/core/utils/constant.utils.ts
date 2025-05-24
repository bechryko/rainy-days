import { ResizeUtils } from '../map/utils';

export class ConstantUtils {
   public static readonly ROW_COUNT = 15;
   public static readonly COLUMN_COUNT = 30;

   private static size: number;

   public static unit(amount = 1): number {
      return this.size * amount;
   }

   public static resize(): void {
      this.size = ResizeUtils.getMaxTileSize(this.ROW_COUNT, this.COLUMN_COUNT);
   }
}
