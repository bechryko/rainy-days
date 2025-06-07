import { BrowserType } from '../enums';

export const supportedBrowsers = {
   [BrowserType.EDGE]: '108',
   [BrowserType.CHROME]: '108',
   [BrowserType.FIREFOX]: '121'
} as const;
