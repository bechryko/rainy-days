import { gameSongs } from '../constants';
import { SongPlayContext } from '../enums';
import { Song } from './song';

export abstract class MusicHandler {
   protected readonly contextSongs: Song[];

   constructor(protected readonly context: SongPlayContext) {
      this.contextSongs = gameSongs.filter(song => song.context === context);
   }

   public abstract chooseNextSong(previousSong: Song | null): Song;

   protected findSongByTitle(title: string): Song {
      const song = this.contextSongs.find(song => song.title === title);
      if (!song) {
         throw new Error(`Song '${title}' not found in context '${this.context}'`);
      }
      return song;
   }
}
