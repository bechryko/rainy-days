import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserType } from '../enums';
import { VersionUtils } from '../utils';

@Injectable({
   providedIn: 'root'
})
export class PlatformService {
   private static readonly CHROME_REGEX = /Chrome\//;
   private static readonly CHROMIUM_REGEX = /Chromium\//;
   private static readonly EDGE_REGEX = /Edg.*\//;
   private static readonly FIREFOX_REGEX = /Firefox\//;
   private static readonly SEAMONKEY_REGEX = /Seamonkey\//;
   private static readonly SAFARI_REGEX = /Safari\//;

   private static readonly SUPPORTED_BROWSER_REGEX_MAP: Partial<Record<BrowserType, RegExp>> = {
      [BrowserType.EDGE]: PlatformService.EDGE_REGEX,
      [BrowserType.CHROME]: PlatformService.CHROME_REGEX,
      [BrowserType.FIREFOX]: PlatformService.FIREFOX_REGEX
   };

   private readonly _isLoaded$ = new BehaviorSubject(false);

   private isBrave = false;

   constructor() {
      this.checkIfBrave().finally(() => this._isLoaded$.next(true));
   }

   public getBrowserType(): BrowserType {
      const { userAgent } = navigator;

      if (this.isBrave) {
         return BrowserType.BRAVE;
      }

      if (PlatformService.SEAMONKEY_REGEX.test(userAgent)) {
         return BrowserType.SEAMONKEY;
      }
      if (PlatformService.CHROMIUM_REGEX.test(userAgent)) {
         return BrowserType.CHROMIUM;
      }
      if (PlatformService.EDGE_REGEX.test(userAgent)) {
         return BrowserType.EDGE;
      }

      if (PlatformService.CHROME_REGEX.test(userAgent)) {
         return BrowserType.CHROME;
      }
      if (PlatformService.FIREFOX_REGEX.test(userAgent)) {
         return BrowserType.FIREFOX;
      }
      if (PlatformService.SAFARI_REGEX.test(userAgent)) {
         return BrowserType.SAFARI;
      }

      return BrowserType.UNKNOWN;
   }

   public getBrowserVersion(): string | null {
      const splitVersions = navigator.userAgent.split('/');
      const regex = PlatformService.SUPPORTED_BROWSER_REGEX_MAP[this.getBrowserType()];

      if (regex) {
         const versionSegmentIndex = splitVersions.findIndex(v => regex.test(v + '/')) + 1;
         return VersionUtils.readFromString(splitVersions[versionSegmentIndex]);
      }

      return null;
   }

   public get isLoaded$(): Observable<boolean> {
      return this._isLoaded$.asObservable();
   }

   private async checkIfBrave(): Promise<void> {
      const isBrave = await (navigator as any).brave.isBrave();
      this.isBrave = isBrave;
   }
}
