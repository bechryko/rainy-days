export class GameUtils {
   public static readonly GAME_CANVAS_ELEMENT_CLASS = 'game-canvas';

   public static isGameCanvasElement(element: unknown): element is HTMLCanvasElement {
      return element instanceof HTMLCanvasElement && element.classList.contains(this.GAME_CANVAS_ELEMENT_CLASS);
   }
}
