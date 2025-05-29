import { BasicDrawer } from '../drawing';
import { Car, Tile } from '../map';

export abstract class Building {
   constructor(public readonly tile: Tile) {}

   public abstract isSpawned(): boolean;

   public onCarMove(car: Car): void {}

   public abstract draw(drawer: BasicDrawer): void;
}
