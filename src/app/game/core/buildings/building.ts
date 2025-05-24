import { BasicDrawer } from '../drawing';
import { Tile } from '../map';

export abstract class Building {
   constructor(public readonly tile: Tile) {}

   public abstract isSpawned(): boolean;

   public abstract draw(drawer: BasicDrawer): void;
}
