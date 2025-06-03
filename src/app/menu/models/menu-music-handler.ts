import { SongPlayContext, SongTag } from '@rainy-days/shared/enums';
import { MusicHandler, Song } from '@rainy-days/shared/models';

export class MenuMusicHandler extends MusicHandler {
   private readonly daySongs = this.findSongsByTag(SongTag.DAY);
   private readonly nightSongs = this.findSongsByTag(SongTag.NIGHT);

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
