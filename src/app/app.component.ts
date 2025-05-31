import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appVersion } from './app-version';
import { StorageID, StorageService } from './shared/services';

@Component({
   selector: 'rd-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   imports: [RouterOutlet],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
   public readonly storageService = inject(StorageService);

   constructor() {
      document.addEventListener(
         'contextmenu',
         e => {
            e.preventDefault();
         },
         false
      );
   }

   public ngAfterViewInit(): void {
      this.storageService.save(StorageID.LAST_USED_GAME_VERSION, appVersion);
   }
}
