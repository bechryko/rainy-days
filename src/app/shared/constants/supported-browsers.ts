import { BrowserType } from '../enums';

export const supportedBrowsers = {
   [BrowserType.EDGE]: '129',
   [BrowserType.CHROME]: '129',
   [BrowserType.FIREFOX]: '140'
} as const;
