import { Injectable } from '@angular/core';

export enum StorageID {
   PERSONAL_BEST = 'personal-best',
   PERSONAL_BEST_TIME = 'personal-best-time',
   GAME_SPEED = 'game-speed'
}

interface StorageIDDataMap {
   [StorageID.PERSONAL_BEST]: number;
   [StorageID.PERSONAL_BEST_TIME]: number | null;
   [StorageID.GAME_SPEED]: number;
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
            return item === null ? 0 : Number(item);
         case StorageID.PERSONAL_BEST_TIME:
            return item === null ? (null as StorageIDDataMap[T]) : Number(item);
         case StorageID.GAME_SPEED:
            return item === null ? 1 : Number(item);
      }
   }

   private getKey(id: string): string {
      return `${StorageService.LOCAL_STORAGE_PREFIX}-${id}`;
   }
}
