import { SongPlayContext } from '../enums';

export interface Song {
   context: SongPlayContext;
   filename: string;
   title: string;
}
