import { ConnectedPosition, OverlayModule } from '@angular/cdk/overlay';
import {
   ChangeDetectionStrategy,
   Component,
   computed,
   DestroyRef,
   inject,
   input,
   OnDestroy,
   OnInit,
   signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomTooltipDirective } from '@rainy-days/shared/directives';
import { MusicHandler } from '@rainy-days/shared/models';
import { MusicService, StorageID, StorageService } from '@rainy-days/shared/services';
import { BehaviorSubject, combineLatest, map, Subject, throttleTime } from 'rxjs';

@Component({
   selector: 'rd-music-controller',
   imports: [MatIconModule, MatButtonModule, OverlayModule, CustomTooltipDirective],
   templateUrl: './music-controller.component.html',
   styleUrl: './music-controller.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicControllerComponent implements OnInit, OnDestroy {
   private static readonly OVERLAY_CLOSE_DELAY_MS = 100;

   private readonly musicService = inject(MusicService);
   private readonly destroyRef = inject(DestroyRef);
   private readonly storageService = inject(StorageService);

   public readonly handler = input.required<MusicHandler>();
   public readonly currentSongTitle = computed(() => {
      const errorMessage = this.musicService.errorMessage();
      if (errorMessage) {
         return errorMessage;
      }
      return this.musicService.currentSong()?.title ?? 'Unmute to start playing!';
   });
   public readonly showInfo = input(false);
   public muted = this.musicService.muted;
   private readonly volumeChange$ = new Subject<number>();

   public readonly overlayPositions = this.getOverlayPositions();
   public readonly volumeButtonHover$ = new BehaviorSubject(false);
   public readonly volumeChangerOverlayHover$ = new BehaviorSubject(false);
   public readonly isOverlayOpen = signal(false);
   private overlayCloseTimeout?: any;

   public ngOnInit(): void {
      this.musicService.playNextSong$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(song => {
         this.musicService.playSong(this.handler().chooseNextSong(song));
      });
      if (!this.storageService.read(StorageID.MUSIC).isMuted) {
         this.musicService.playSong(this.handler().chooseNextSong(null));
      }

      this.volumeChange$.pipe(throttleTime(100)).subscribe(value => {
         this.musicService.setVolume(value);
         if (this.muted) {
            this.onMute();
         }
      });

      combineLatest([this.volumeButtonHover$, this.volumeChangerOverlayHover$])
         .pipe(map(([volumeButtonHover, volumeChangerOverlayHover]) => volumeButtonHover || volumeChangerOverlayHover))
         .subscribe(isOverlayOpen => {
            if (isOverlayOpen) {
               if (this.overlayCloseTimeout) {
                  clearTimeout(this.overlayCloseTimeout);
               }
               this.isOverlayOpen.set(true);
            } else {
               this.overlayCloseTimeout = setTimeout(
                  () => this.isOverlayOpen.set(false),
                  MusicControllerComponent.OVERLAY_CLOSE_DELAY_MS
               );
            }
         });
   }

   public ngOnDestroy(): void {
      this.musicService.stopPlaying();
   }

   public onMute(): void {
      this.muted = this.musicService.toggleMute();
   }

   public onVolumeChange(event: any): void {
      const valuePercent = Number(event.target.value);
      this.volumeChange$.next(valuePercent / 100);
   }

   public getVolume(): number {
      return this.musicService.volume * 100;
   }

   private getOverlayPositions(): ConnectedPosition[] {
      const horizontalCenter = {
         originX: 'center',
         overlayX: 'center'
      } as const;

      return [
         {
            ...horizontalCenter,
            originY: 'bottom',
            overlayY: 'top'
         },
         {
            ...horizontalCenter,
            originY: 'top',
            overlayY: 'bottom'
         }
      ];
   }
}
