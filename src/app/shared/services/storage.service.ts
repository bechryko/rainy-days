import { Injectable } from '@angular/core';
import { appVersion } from 'src/app/app-version';

export enum StorageID {
   PERSONAL_BEST = 'personal-best',
   PERSONAL_BEST_TIME = 'personal-best-time',
   GAME_SPEED = 'game-speed',
   LAST_USED_GAME_VERSION = 'last-used-game-version'
}

interface StorageIDDataMap {
   [StorageID.PERSONAL_BEST]: number;
   [StorageID.PERSONAL_BEST_TIME]: number | null;
   [StorageID.GAME_SPEED]: number;
   [StorageID.LAST_USED_GAME_VERSION]: string;
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
      let parsedValue: any;
      switch (id) {
         case StorageID.PERSONAL_BEST:
            parsedValue = item === null ? 0 : Number(item);
            break;
         case StorageID.PERSONAL_BEST_TIME:
            parsedValue = item === null ? null : Number(item);
            break;
         case StorageID.GAME_SPEED:
            parsedValue = item === null ? 1 : Number(item);
            break;
         case StorageID.LAST_USED_GAME_VERSION:
            parsedValue = item === null ? appVersion : item;
            break;
      }
      return parsedValue;
   }

   private getKey(id: string): string {
      return `${StorageService.LOCAL_STORAGE_PREFIX}-${id}`;
   }
}
