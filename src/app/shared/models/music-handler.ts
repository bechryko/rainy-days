import { gameSongs } from '../constants';
import { SongPlayContext, SongTag } from '../enums';
import { Song } from './song';

export abstract class MusicHandler {
   private static readonly RARE_SONG_WEIGHT = 0.25;

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
      const normalSongs = songs.filter(song => !song.tags.includes(SongTag.RARE));
      const normalSongWeight = normalSongs.length;
      const rareSongs = this.findSongsByTag(SongTag.RARE, songs);
      const rareSongWeight = rareSongs.length * MusicHandler.RARE_SONG_WEIGHT;

      const list = Math.random() * (normalSongWeight + rareSongWeight) < normalSongWeight ? normalSongs : rareSongs;

      return list[Math.floor(Math.random() * list.length)];
   }

   protected findSongsByTag(tag: SongTag, songList = this.contextSongs): Song[] {
      return songList.filter(song => song.tags.includes(tag));
   }
}
