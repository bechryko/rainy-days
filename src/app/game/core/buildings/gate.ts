import { Building } from './building';

export abstract class Gate extends Building {
   public override isSpawned(): boolean {
      return false;
   }
}
