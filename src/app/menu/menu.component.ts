import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { GameStartService } from 'src/app/game-start.service';
import { NewsComponent } from './news';

@Component({
   selector: 'rd-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss'],
   imports: [MatGridList, MatGridTile, NewsComponent, MatButton, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatIcon, MatSuffix],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
   private router = inject(Router);
   private gameStartService = inject(GameStartService);

   buttonGroup: string = 'menu';
   setupGameForm = new FormGroup({
      seed: new FormControl('', [Validators.pattern('^[0-9a-zA-Z]*$')])
   });

   switchButtonGroup(group: string) {
      this.buttonGroup = group;
      this.setupGameForm.reset();
   }
   startQuickGame() {
      this.gameStartService.initStartingParams('');
      this.router.navigateByUrl('/game');
   }
   startCustomGame() {
      this.gameStartService.initStartingParams(this.setupGameForm.value.seed ?? '');
      this.router.navigateByUrl('/game');
   }
}
