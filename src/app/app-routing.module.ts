import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: 'menu',
      loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
   },
   {
      path: 'game',
      loadChildren: () => import('./game/game.module').then(m => m.GameModule)
   },
   {
      path: '**',
      redirectTo: 'menu'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
