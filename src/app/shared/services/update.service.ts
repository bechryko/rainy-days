import { inject, Injectable, Signal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { UnrecoverableUpdateStateDialogComponent } from '../components';
import { SwUpdateState } from '../enums';

@Injectable({
   providedIn: 'root'
})
export class UpdateService {
   private readonly swUpdate = inject(SwUpdate);
   private readonly dialog = inject(MatDialog);

   private readonly state = signal(SwUpdateState.CHECKING);

   constructor() {
      this.swUpdate.versionUpdates.subscribe(event => {
         switch (event.type) {
            case 'NO_NEW_VERSION_DETECTED':
               this.state.set(SwUpdateState.LATEST_VERSION);
               break;
            case 'VERSION_DETECTED':
               this.state.set(SwUpdateState.DOWNLOADING);
               break;
            case 'VERSION_READY':
               this.state.set(SwUpdateState.UPDATE_DOWNLOAD_SUCCESSFUL);
               break;
            case 'VERSION_INSTALLATION_FAILED':
               this.state.set(SwUpdateState.UPDATE_DOWNLOAD_FAILED);
               break;
         }
      });

      this.swUpdate.unrecoverable.pipe(takeUntilDestroyed()).subscribe(event => {
         this.dialog.open(UnrecoverableUpdateStateDialogComponent, { disableClose: true, data: event.reason });
      });
   }

   public areServiceWorkersEnabled(): boolean {
      return this.swUpdate.isEnabled;
   }

   public get updateState(): Signal<SwUpdateState> {
      return this.state.asReadonly();
   }
}
