import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { Route } from '@rainy-days/routes';
import { StorageID, StorageService } from '@rainy-days/shared/services';
import { GameStartService } from 'src/app/game-start.service';
import { ControlPanelGroup } from './models';
import { NewsComponent } from './news/news.component';

@Component({
   selector: 'rd-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss'],
   imports: [NewsComponent, MatButton, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatIcon, MatSuffix],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
   private readonly router = inject(Router);
   private readonly gameStartService = inject(GameStartService);
   private readonly storageService = inject(StorageService);

   public readonly ControlPanelGroup = ControlPanelGroup;

   public buttonGroup: ControlPanelGroup = ControlPanelGroup.MAIN_MENU;
   public personalBest = this.storageService.read(StorageID.PERSONAL_BEST);

   public readonly setupGameForm = new FormGroup({
      seed: new FormControl('', [Validators.pattern('^[0-9a-zA-Z]*$')])
   });

   public switchButtonGroup(group: ControlPanelGroup): void {
      this.buttonGroup = group;
      this.setupGameForm.reset();
   }

   public startQuickGame(): void {
      this.gameStartService.initStartingParams('');
      this.router.navigateByUrl(Route.GAME);
   }

   public startCustomGame(): void {
      this.gameStartService.initStartingParams(this.setupGameForm.value.seed ?? '');
      this.router.navigateByUrl(Route.GAME);
   }
}
