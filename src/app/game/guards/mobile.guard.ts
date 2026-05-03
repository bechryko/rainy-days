import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Route } from '@rainy-days/routes';
import { PlatformService } from '@rainy-days/shared/services';

export const mobileGuard: CanActivateFn = () => {
   const platformService = inject(PlatformService);
   const router = inject(Router);

   if (platformService.isMobile()) {
      router.navigateByUrl(Route.MENU);
      return false;
   }
   return true;
};
