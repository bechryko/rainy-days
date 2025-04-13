import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapComponent } from './game-area/game-area.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
   imports: [
      CommonModule,
      GameRoutingModule,
      MatButtonModule,
      MatSnackBarModule,
      MatTooltipModule,
      GameComponent,
      ToolbarComponent,
      MapComponent
   ]
})
export class GameModule { }
