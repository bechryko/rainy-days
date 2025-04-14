import { BasicDrawer } from '../drawing';
import { Tile } from '../map';

export abstract class Building {
   public static readonly MAIN_SPAWN_TIMER = 45;

   constructor(
      public readonly tile: Tile,
      public readonly destructible = true
   ) {}

   public abstract draw(drawer: BasicDrawer): void;
}
