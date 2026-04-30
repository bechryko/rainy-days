import { Platform } from '@angular/cdk/platform';
import { inject, Injectable, Signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, fromEvent, map, Observable } from 'rxjs';
import { supportedBrowsers } from '../constants';
import { BrowserType } from '../enums';
import { VersionUtils } from '../utils';

type SupportedBrowserName = keyof typeof supportedBrowsers;

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

   private static readonly SUPPORTED_BROWSER_REGEX_MAP: Record<SupportedBrowserName, RegExp> = {
      [BrowserType.EDGE]: PlatformService.EDGE_REGEX,
      [BrowserType.CHROME]: PlatformService.CHROME_REGEX,
      [BrowserType.FIREFOX]: PlatformService.FIREFOX_REGEX
   };

   private readonly platform = inject(Platform);

   private readonly _isLoaded$ = new BehaviorSubject(false);
   public readonly isPWAInstalled: Signal<boolean>;

   private isBrave = false;

   constructor() {
      this.checkIfBrave().finally(() => this._isLoaded$.next(true));

      const installedMediaQueryFactory = () => window.matchMedia('(display-mode: standalone)');
      this.isPWAInstalled = toSignal(
         fromEvent(installedMediaQueryFactory(), 'change').pipe(
            takeUntilDestroyed(),
            map(() => installedMediaQueryFactory().matches)
         ),
         { initialValue: installedMediaQueryFactory().matches }
      );
   }

   public isBrowserVersionSupported(): boolean {
      const browser = this.getBrowserType();
      const version = this.getBrowserVersion();

      if (!version || !(browser in supportedBrowsers)) {
         return false;
      }

      const supportedVersion = supportedBrowsers[browser as keyof typeof supportedBrowsers];
      return VersionUtils.compare(supportedVersion, version) !== 1;
   }

   public getBrowserType(): BrowserType {
      this.checkLoadedState();

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
      const regex: RegExp | undefined =
         PlatformService.SUPPORTED_BROWSER_REGEX_MAP[this.getBrowserType() as SupportedBrowserName];

      if (regex) {
         const versionSegmentIndex = splitVersions.findIndex(v => regex.test(v + '/')) + 1;
         return VersionUtils.readFromString(splitVersions[versionSegmentIndex]);
      }

      return null;
   }

   public isMobile(): boolean {
      return this.platform.ANDROID || this.platform.IOS;
   }

   public get isLoaded$(): Observable<boolean> {
      return this._isLoaded$.asObservable();
   }

   private async checkIfBrave(): Promise<void> {
      const isBrave = await (navigator as any).brave.isBrave();
      this.isBrave = isBrave;
   }

   private checkLoadedState(): void {
      if (!this._isLoaded$.value) {
         throw new Error('Platform information is not yet loaded!');
      }
   }
}
