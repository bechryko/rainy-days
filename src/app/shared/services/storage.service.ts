import { Injectable } from '@angular/core';
import { appVersion } from 'src/app/app-version';
import { MusicState } from '../models';

export enum StorageID {
   PERSONAL_BEST = 'personal-best',
   PERSONAL_BEST_TIME = 'personal-best-time',
   GAME_SPEED = 'game-speed',
   LAST_USED_GAME_VERSION = 'last-used-game-version',
   MUSIC = 'music'
}

interface StorageIDDataMap {
   [StorageID.PERSONAL_BEST]: number;
   [StorageID.PERSONAL_BEST_TIME]: number | null;
   [StorageID.GAME_SPEED]: number;
   [StorageID.LAST_USED_GAME_VERSION]: string;
   [StorageID.MUSIC]: MusicState;
}

@Injectable({
   providedIn: 'root'
})
export class StorageService {
   private static readonly LOCAL_STORAGE_PREFIX = 'rainy-days';

   public save<T extends StorageID>(id: T, data: StorageIDDataMap[T]): void {
      const dataToSave = typeof data === 'object' ? JSON.stringify(data) : String(data);
      localStorage.setItem(this.getKey(id), dataToSave);
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
         case StorageID.MUSIC:
            const obj = this.parseToObject(item);
            const volume = Number(obj['volume']);
            parsedValue = {
               volume: isNaN(volume) ? undefined : volume,
               isMuted: Boolean(obj['isMuted'])
            };
            break;
      }
      return parsedValue;
   }

   private getKey(id: string): string {
      return `${StorageService.LOCAL_STORAGE_PREFIX}-${id}`;
   }

   private parseToObject(item: string | null): Record<string, unknown> {
      let obj: any;
      try {
         obj = JSON.parse(item ?? '{}');
         if (!(typeof obj === 'object')) {
            obj = {};
         }
      } catch (_) {
         obj = {};
      }
      return obj;
   }
}
