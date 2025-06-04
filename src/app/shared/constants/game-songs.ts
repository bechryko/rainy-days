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
   },
   {
      context: SongPlayContext.GAME,
      filename: 'the-yield-of-a-warm-breeze',
      title: 'The Yield of a Warm Breeze',
      tags: [SongTag.LATE_GAME]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'the-eye-of-the-storm',
      title: 'The Eye of the Storm',
      tags: [SongTag.LATE_GAME]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'what-could-one-more-step-mean-rainy-days-version',
      title: 'What Could One More Step Mean (Rainy Days Version)',
      tags: [SongTag.LATE_GAME, SongTag.RARE]
   },
   {
      context: SongPlayContext.GAME,
      filename: 'summer-shower',
      title: 'Summer Shower',
      tags: [SongTag.LATE_GAME]
   }
];
