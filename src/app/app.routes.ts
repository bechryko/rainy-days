import { Routes } from '@angular/router';
import { mobileGuard } from '@rainy-days/guards/game';

export enum Route {
   MENU = 'menu',
   GAME = 'game'
}

export const routes: Routes = [
   {
      path: Route.MENU,
      loadComponent: () => import('./menu/menu.component').then(c => c.MenuComponent)
   },
   {
      path: Route.GAME,
      loadComponent: () => import('./game/game.component').then(c => c.GameComponent),
      canActivate: [mobileGuard]
   },
   {
      path: '**',
      redirectTo: Route.MENU
   }
];
