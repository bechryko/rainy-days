import { SongPlayContext } from '../enums';
import { Song } from '../models';

export const gameSongs: Song[] = [
   {
      context: SongPlayContext.MENU,
      filename: 'rainy-days',
      title: 'Rainy Days'
   },
   {
      context: SongPlayContext.MENU,
      filename: 'cloudy-nights',
      title: 'Cloudy Nights'
   }
];
