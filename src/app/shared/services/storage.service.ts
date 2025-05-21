import { Injectable } from '@angular/core';

export enum StorageID {
   PERSONAL_BEST = 'personal-best'
}

interface StorageIDDataMap {
   [StorageID.PERSONAL_BEST]: number;
}

@Injectable({
   providedIn: 'root'
})
export class StorageService {
   private static readonly LOCAL_STORAGE_PREFIX = 'rainy-days';

   public save<T extends StorageID>(id: T, data: StorageIDDataMap[T]): void {
      localStorage.setItem(this.getKey(id), String(data));
   }

   public read<T extends StorageID>(id: T): StorageIDDataMap[T] {
      return this.parseItem(id, localStorage.getItem(this.getKey(id)));
   }

   private parseItem<T extends StorageID>(id: T, item: string | null): StorageIDDataMap[T] {
      switch (id) {
         case StorageID.PERSONAL_BEST:
            if (item === null) {
               return 0;
            }
            return Number(item);
      }
   }

   private getKey(id: string): string {
      return `${StorageService.LOCAL_STORAGE_PREFIX}-${id}`;
   }
}
