import { RandomUtils } from "../../utils";

export class ColorUtils {
   public static getBaseTileColor(): string {
      return this.getPropertyValue("--rd-game-tile-color-base");
   }

   public static getGameObjectColors(): string[] {
      const colors: string[] = [];
      let color: string;
      for (let idx = 1; ; idx++) {
         color = this.getPropertyValue(`--rd-game-tile-color-${idx}`);
         if (!color) {
            break;
         }
         colors.push(color);
      }
      return colors;
   }

   public static getRandomGameObjectColor(): string {
      return RandomUtils.nextArrayElement(this.getGameObjectColors());
   }

   private static getPropertyValue(propertyName: string): string {
      return window.getComputedStyle(document.body).getPropertyValue(propertyName);
   }
}
