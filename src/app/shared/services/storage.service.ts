import { Injectable } from '@angular/core';
import { appVersion } from 'src/app/app-version';
import { MusicState, PersonalBestState } from '../state';

export enum StorageID {
   PERSONAL_BEST = 'personal-best',
   GAME_SPEED = 'game-speed',
   LAST_USED_GAME_VERSION = 'last-used-game-version',
   MUSIC = 'music'
}

interface StorageIDDataMap {
   [StorageID.PERSONAL_BEST]: PersonalBestState;
   [StorageID.GAME_SPEED]: number;
   [StorageID.LAST_USED_GAME_VERSION]: string;
   [StorageID.MUSIC]: MusicState;
}

@Injectable({
   providedIn: 'root'
})
export class StorageService {
   private static readonly LOCAL_STORAGE_PREFIX = 'rainy-days';

   constructor() {
      this.removeUnusedKeys();
   }

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
            const obj = this.parseToObject(item);
            parsedValue = {
               score: this.parseToNumber(obj['score'], 0),
               timestamp: this.parseToNumber(obj['timestamp'], 0)
            };
            break;
         case StorageID.GAME_SPEED:
            parsedValue = item === null ? 1 : Number(item);
            break;
         case StorageID.LAST_USED_GAME_VERSION:
            parsedValue = item === null ? appVersion : item;
            break;
         case StorageID.MUSIC:
            const obj2 = this.parseToObject(item);
            parsedValue = {
               volume: this.parseToNumber(obj2['volume'], undefined),
               isMuted: Boolean(obj2['isMuted'])
            };
            break;
      }
      return parsedValue;
   }

   private getKey(id: StorageID): string {
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

   private parseToNumber<DT extends number | undefined>(item: unknown, defaultValue: DT): number | DT {
      const numberItem = Number(item);
      return isNaN(numberItem) ? defaultValue : numberItem;
   }

   private removeUnusedKeys(): void {
      const usedKeys = Object.values(StorageID).map(id => this.getKey(id));

      for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i)!;
         if (key.startsWith(StorageService.LOCAL_STORAGE_PREFIX) && !usedKeys.includes(key)) {
            localStorage.removeItem(key);
         }
      }
   }
}
