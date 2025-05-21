import { Injectable } from '@angular/core';

type StorageID = '';

@Injectable({
   providedIn: 'root'
})
export class StorageService {
   private static readonly LOCAL_STORAGE_PREFIX = 'rainy-days';

   public save(id: StorageID, data: any): void {
      localStorage.setItem(this.getKey(id), JSON.stringify(data));
   }

   public read(id: StorageID): any {
      return this.parseItem(localStorage.getItem(this.getKey(id)));
   }

   private parseItem(item: string | null): any {
      if (item === null) {
         return null;
      }

      return JSON.parse(item);
   }

   private getKey(id: string): string {
      return `${StorageService.LOCAL_STORAGE_PREFIX}-${id}`;
   }
}
