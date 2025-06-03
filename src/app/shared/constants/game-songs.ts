import { SongPlayContext, SongTag } from '../enums';
import { Song } from '../models';

export const gameSongs: Song[] = [
   {
      context: SongPlayContext.MENU,
      filename: 'rainy-days',
      title: 'Rainy Days',
      tags: [SongTag.DAY]
   },
   {
      context: SongPlayContext.MENU,
      filename: 'cloudy-nights',
      title: 'Cloudy Nights',
      tags: [SongTag.NIGHT]
   }
];
