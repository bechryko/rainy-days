import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameStartService } from 'src/app/game-start.service';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { NewsComponent } from './news/news.component';

import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    imports: [MatGridList, MatGridTile, NewsComponent, MatButton, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatIcon, MatSuffix]
})
export class MenuComponent {
   private router = inject(Router);
   private gameStartService = inject(GameStartService);

   buttonGroup: string = "menu";
   setupGameForm = new FormGroup({
      seed: new FormControl('', [Validators.pattern('^[0-9a-zA-Z]*$')])
   });

   switchButtonGroup(group: string) {
      this.buttonGroup = group;
      this.setupGameForm.reset();
   }
   startQuickGame() {
      this.gameStartService.initStartingParams("");
      this.router.navigateByUrl('/game');
   }
   startCustomGame() {
      this.gameStartService.initStartingParams(this.setupGameForm.value.seed ?? "");
      this.router.navigateByUrl('/game');
   }
}
