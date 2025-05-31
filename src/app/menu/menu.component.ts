import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Route } from '@rainy-days/routes';
import { SwUpdateState } from '@rainy-days/shared/enums';
import { since } from '@rainy-days/shared/functions';
import { MusicService, StorageID, StorageService, UpdateService } from '@rainy-days/shared/services';
import { GameStartService } from 'src/app/game-start.service';
import { appVersion } from '../app-version';
import { UpdateInfoTileComponent } from './components';
import { VersionUpdateDialogComponent } from './dialogs';
import { ControlPanelGroup, MenuMusicHandler } from './models';
import { NewsComponent } from './news/news.component';

@Component({
   selector: 'rd-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.scss'],
   imports: [
      NewsComponent,
      MatButton,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInput,
      MatIcon,
      MatTooltipModule,
      UpdateInfoTileComponent
   ],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
   private readonly router = inject(Router);
   private readonly gameStartService = inject(GameStartService);
   private readonly storageService = inject(StorageService);
   private readonly updateService = inject(UpdateService);
   private readonly dialog = inject(MatDialog);
   private readonly musicService = inject(MusicService);

   public readonly updateState = this.updateService.updateState;
   public readonly ControlPanelGroup = ControlPanelGroup;

   public buttonGroup: ControlPanelGroup = ControlPanelGroup.MAIN_MENU;
   public readonly personalBest = this.storageService.read(StorageID.PERSONAL_BEST);
   public readonly personalBestSince = since(this.storageService.read(StorageID.PERSONAL_BEST_TIME));
   public readonly serviceWorkersEnabled = this.updateService.areServiceWorkersEnabled();
   public readonly currentAppVersion = appVersion;
   public readonly currentYear = new Date().getFullYear();
   private readonly musicHandler = new MenuMusicHandler();

   public readonly setupGameForm = new FormGroup({
      seed: new FormControl('', [Validators.pattern('^[0-9a-zA-Z]*$')])
   });

   constructor() {
      effect(() => {
         if (this.updateState() === SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL) {
            this.openVersionUpdateDialog();
         }
      });

      this.musicService.songEnded$.subscribe(song => {
         this.musicService.playSong(this.musicHandler.chooseNextSong(song));
      });
      this.musicService.playSong(this.musicHandler.chooseNextSong());
   }

   public openVersionUpdateDialog(): void {
      this.dialog.open(VersionUpdateDialogComponent);
   }

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
