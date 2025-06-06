import { BrowserType } from '../enums';

export const supportedBrowsers = {
   [BrowserType.EDGE]: '117',
   [BrowserType.CHROME]: '117',
   [BrowserType.FIREFOX]: '129'
} as const;
