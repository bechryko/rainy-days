import { supportedBrowsers } from '../constants';
import { BrowserType } from '../enums';

export class VersionUtils {
   public static isSupported(browser: BrowserType, version: string | null): boolean {
      if (!version || !(browser in supportedBrowsers)) {
         return false;
      }

      const supportedVersion = supportedBrowsers[browser as keyof typeof supportedBrowsers];
      return this.compare(supportedVersion, version) !== 1;
   }

   public static compare(v1: string, v2: string): number {
      const v1Min = this.minimalize(v1);
      const v2Min = this.minimalize(v2);

      if (v1Min === v2Min) {
         return 0;
      }

      const v1Split = v1Min.split('.');
      const v2Split = v2Min.split('.');
      for (let i = 0; i < v1Split.length && i < v2Split.length; i++) {
         if (v1Split[i] === v2Split[i]) {
            continue;
         }

         return Math.sign(Number(v1Split[i]) - Number(v2Split[i]));
      }

      return v1Split.length > v2Split.length ? 1 : -1;
   }

   public static readFromString(str: string): string {
      let version = '';

      for (let i = 0; i < str.length; i++) {
         const letter = str[i];
         if (/[\d\.]/.test(letter)) {
            version += letter;
         } else {
            break;
         }
      }

      return version;
   }

   public static minimalize(version: string): string {
      const vs = version.split('.');

      for (let i = vs.length - 1; i >= 0; i--) {
         const v = Number(vs[i]);
         if (v !== 0 && !isNaN(v)) {
            return vs.slice(0, i + 1).join('.');
         }
      }

      return '0';
   }
}
