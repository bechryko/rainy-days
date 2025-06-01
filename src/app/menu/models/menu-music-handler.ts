import { SongPlayContext } from '@rainy-days/shared/enums';
import { MusicHandler, Song } from '@rainy-days/shared/models';

export class MenuMusicHandler extends MusicHandler {
   private readonly daySong = this.findSongByTitle('Rainy Days');
   private readonly nightSong = this.findSongByTitle('Cloudy Nights');

   constructor() {
      super(SongPlayContext.MENU);
   }

   public override chooseNextSong(previousSong: Song | null): Song {
      return this.isDay() ? this.daySong : this.nightSong;
   }

   private isDay(): boolean {
      const currentHour = new Date().getHours();
      return currentHour >= 6 && currentHour < 18;
   }
}
