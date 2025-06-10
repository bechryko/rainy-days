import { ChangeDetectionStrategy, Component, computed, HostListener, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwUpdateState } from '@rainy-days/shared/enums';

interface UpdateStateFlags {
   isHidden: boolean;
   isLoading: boolean;
   isSuccessful: boolean;
   isError: boolean;
   isClickable: boolean;
   isOffline: boolean;
}

@Component({
   selector: 'rd-update-info-tile',
   imports: [MatProgressSpinnerModule, MatIconModule],
   templateUrl: './update-info-tile.component.html',
   styleUrl: './update-info-tile.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class.hidden]': 'flags().isHidden',
      '[class.clickable]': 'flags().isClickable'
   }
})
export class UpdateInfoTileComponent {
   public readonly state = input.required<SwUpdateState>();
   public readonly openDialog = output();
   public readonly flags = computed(() => this.calculateFlags(this.state()));
   public readonly message = computed<string>(() => {
      switch (this.state()) {
         case SwUpdateState.CHECKING:
            return 'Checking for updates...';
         case SwUpdateState.DOWNLOADING:
            return 'Downloading updates...';
         case SwUpdateState.UPDATE_DOWNLOAD_FAILED:
            return 'Downloading updates failed!';
         case SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL:
            return 'Updates downloaded!';
         case SwUpdateState.LATEST_VERSION:
            return 'No updates found.';
         case SwUpdateState.OFFLINE:
            return 'The game is offline!';
      }
   });

   @HostListener('click')
   public onClick(): void {
      if (this.state() === SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL) {
         this.openDialog.emit();
      }
   }

   private calculateFlags(state: SwUpdateState): UpdateStateFlags {
      return {
         isHidden: state === SwUpdateState.LATEST_VERSION,
         isLoading: state === SwUpdateState.CHECKING || state === SwUpdateState.DOWNLOADING,
         isSuccessful: state === SwUpdateState.LATEST_VERSION || state === SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL,
         isError: state === SwUpdateState.UPDATE_DOWNLOAD_FAILED,
         isClickable: state === SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL,
         isOffline: state === SwUpdateState.OFFLINE
      };
   }
}
