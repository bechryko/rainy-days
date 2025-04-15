import { Pipe, PipeTransform } from '@angular/core';
import { GameStatus } from '@rainy-days/game/models';

@Pipe({
   name: 'calculateTrueGameSpeed'
})
export class CalculateTrueGameSpeedPipe implements PipeTransform {
   public transform(gameStatus: GameStatus): number {
      return gameStatus.isPaused ? 0 : gameStatus.gameSpeed;
   }
}
