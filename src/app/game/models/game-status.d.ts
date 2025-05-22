export interface GameStatus {
   isGameGoing: boolean;
   isVictory: boolean;
   isPaused: boolean;
   gameSpeed: number;
   selectedToolbarItem: number;
   score: number;
   spawnTimer: number;
}
