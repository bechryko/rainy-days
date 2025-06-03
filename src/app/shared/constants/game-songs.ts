import { SongPlayContext, SongTag } from '../enums';
import { Song } from '../models';

export const gameSongs: Song[] = [
   {
      context: SongPlayContext.MENU,
      filename: 'rainy-days',
      title: 'Rainy Days',
      tags: [SongTag.DAY_THEME]
   },
   {
      context: SongPlayContext.MENU,
      filename: 'cloudy-nights',
      title: 'Cloudy Nights',
      tags: [SongTag.NIGHT_THEME]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'meandering-tunnels',
      title: 'Meandering Tunnels',
      tags: [SongTag.EARLY_GAME]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'through-the-orange-rain',
      title: 'Through the Orange Rain',
      tags: [SongTag.EARLY_GAME]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'droplets-embrace',
      title: 'Droplets Embrace',
      tags: [SongTag.EARLY_GAME]
   }
];
