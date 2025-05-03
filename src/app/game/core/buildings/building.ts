import { BasicDrawer } from '../drawing';
import { Tile } from '../map';

export abstract class Building {
   public static readonly MAIN_SPAWN_TIMER = 45;

   constructor(public readonly tile: Tile) {}

   public abstract isSpawned(): boolean;

   public abstract draw(drawer: BasicDrawer): void;
}
