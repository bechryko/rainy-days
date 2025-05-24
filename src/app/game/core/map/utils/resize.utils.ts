import { ConstantUtils } from '@rainy-days/core/utils';

export class ResizeUtils {
   private static readonly TOOLBAR_HEIGHT_REM = 7.5;
   public static readonly CANVAS_BORDER_WIDTH_REM = 0.5;

   public static getMaxTileSize(): number {
      const maxTileWidth = Math.floor(this.getMaxAvailableWidth() / ConstantUtils.COLUMN_COUNT);
      const maxTileHeight = Math.floor(this.getMaxAvailableHeight() / ConstantUtils.ROW_COUNT);
      return Math.min(maxTileHeight, maxTileWidth);
   }

   public static remToPx(rem: number): number {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
   }

   private static getMaxAvailableWidth(): number {
      return Math.round(window.innerWidth * 0.95 - 2 * ResizeUtils.remToPx(ResizeUtils.CANVAS_BORDER_WIDTH_REM));
   }

   private static getMaxAvailableHeight(): number {
      return Math.round(
         window.innerHeight * 0.95 -
            ResizeUtils.remToPx(ResizeUtils.TOOLBAR_HEIGHT_REM) -
            2 * ResizeUtils.remToPx(ResizeUtils.CANVAS_BORDER_WIDTH_REM)
      );
   }
}
