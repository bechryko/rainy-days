import { Car } from '../map/car';
import { Building } from './building';

export abstract class Gate extends Building {
   public abstract doesLetPass(car: Car): boolean;
}
