import { gameSongs } from '../constants';
import { SongPlayContext, SongTag } from '../enums';
import { Song } from './song';

export abstract class MusicHandler {
   protected readonly contextSongs: Song[];

   constructor(protected readonly context: SongPlayContext) {
      this.contextSongs = gameSongs.filter(song => song.context === context);
   }

   public abstract chooseNextSong(previousSong: Song | null): Song;

   protected getRandomSong(previousSong: Song | null, songList = this.contextSongs): Song {
      if (songList.length === 0) {
         throw new Error('No songs to choose from!');
      }
      if (songList.length === 1) {
         return songList[0];
      }

      const songs = songList.filter(song => song !== previousSong);
      return songs[Math.floor(Math.random() * songs.length)];
   }

   protected findSongsByTag(tag: SongTag): Song[] {
      return this.contextSongs.filter(song => song.tags.includes(tag));
   }
}
