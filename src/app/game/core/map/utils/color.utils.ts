import { RandomUtils } from '../../utils';

export enum SystemColorToken {
   GRID = '--rd-game-grid-color',
   BUILDING_OUTLINE = '--rd-game-building-outline-color',
   CAR_OUTLINE = '--rd-game-car-outline-color',
   TEXT = '--rd-game-text-color'
}

export enum ComponentColorToken {
   BASIC_ROAD = '--rd-game-basic-road-color',
   TUBE_OUTLINE = '--rd-game-tube-outline-color',
   TUBE = '--rd-game-tube-color',
   TIMED_GATE_OPEN = '--rd-game-timed-gate-open-color',
   TIMED_GATE_CLOSED = '--rd-game-timed-gate-closed-color',
   TIMED_GATE_X = '--rd-game-timed-gate-x-color'
}

export class ColorUtils {
   public static getTokenValue(colorToken: SystemColorToken | ComponentColorToken): string {
      return this.getPropertyValue(colorToken);
   }

   public static getBaseTileColor(): string {
      return this.getPropertyValue('--rd-game-tile-color-base');
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
