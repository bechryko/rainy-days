import { BrowserType } from '@rainy-days/shared/enums';

export interface Browser {
   type: BrowserType;
   version: string | null;
}
