export class ResizeUtils {
   private static readonly TOOLBAR_HEIGHT_REM = 7.5;
   public static readonly CANVAS_BORDER_WIDTH_REM = 0.5;

   public static getMaxTileSize(rows: number, columns: number): number {
      const maxTileWidth = Math.floor(this.getMaxAvailableWidth() / columns);
      const maxTileHeight = Math.floor(this.getMaxAvailableHeight() / rows);
      return Math.min(maxTileHeight, maxTileWidth);
   }

   public static remToPx(rem: number): number {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
   }

   private static getMaxAvailableWidth(): number {
      return Math.round(window.innerWidth * 0.95 - 2 * this.remToPx(this.CANVAS_BORDER_WIDTH_REM));
   }

   private static getMaxAvailableHeight(): number {
      return Math.round(
         window.innerHeight * 0.95 -
            this.remToPx(this.TOOLBAR_HEIGHT_REM) -
            2 * this.remToPx(this.CANVAS_BORDER_WIDTH_REM)
      );
   }
}
