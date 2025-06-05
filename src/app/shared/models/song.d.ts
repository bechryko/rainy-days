import { SongPlayContext, SongTag } from '../enums';

export interface Song {
   context: SongPlayContext;
   filename: string;
   title: string;
   tags: SongTag[];
}
