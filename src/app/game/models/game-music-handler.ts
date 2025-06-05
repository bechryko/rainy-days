import { SongPlayContext, SongTag } from '@rainy-days/shared/enums';
import { MusicHandler, Song } from '@rainy-days/shared/models';

export class GameMusicHandler extends MusicHandler {
   private static readonly EARLY_GAME_END_SCORE = 750;

   private readonly earlyGameSongs = this.findSongsByTag(SongTag.EARLY_GAME);
   private readonly lateGameSongs = this.findSongsByTag(SongTag.LATE_GAME);

   constructor(private readonly getScoreFn: () => number) {
      super(SongPlayContext.GAME);
   }

   public override chooseNextSong(previousSong: Song | null): Song {
      return this.isEarlyGame()
         ? this.getRandomSong(previousSong, this.earlyGameSongs)
         : this.getRandomSong(previousSong, this.lateGameSongs);
   }

   private isEarlyGame(): boolean {
      return this.getScoreFn() < GameMusicHandler.EARLY_GAME_END_SCORE;
   }
}
