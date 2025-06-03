import { SongPlayContext, SongTag } from '@rainy-days/shared/enums';
import { MusicHandler, Song } from '@rainy-days/shared/models';

export class MenuMusicHandler extends MusicHandler {
   private readonly daySongs = this.findSongsByTag(SongTag.DAY_THEME);
   private readonly nightSongs = this.findSongsByTag(SongTag.NIGHT_THEME);

   constructor() {
      super(SongPlayContext.MENU);
   }

   public override chooseNextSong(previousSong: Song | null): Song {
      return this.isDay()
         ? this.getRandomSong(previousSong, this.daySongs)
         : this.getRandomSong(previousSong, this.nightSongs);
   }

   private isDay(): boolean {
      const currentHour = new Date().getHours();
      return currentHour >= 6 && currentHour < 18;
   }
}
