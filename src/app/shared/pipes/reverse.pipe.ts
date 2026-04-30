import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'reverse'
})
export class ReversePipe implements PipeTransform {
   public transform<T>(value: T[]): T[] {
      return [...value].reverse();
   }
}
