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
import { MusicHandler } from '@rainy-days/shared/models';
import { MusicService } from '@rainy-days/shared/services';
import { BehaviorSubject, combineLatest, map, startWith, Subject, throttleTime } from 'rxjs';

@Component({
   selector: 'rd-music-controller',
   imports: [MatIconModule, MatButtonModule, OverlayModule],
   templateUrl: './music-controller.component.html',
   styleUrl: './music-controller.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicControllerComponent implements OnInit, OnDestroy {
   private static readonly OVERLAY_CLOSE_DELAY_MS = 100;

   private readonly musicService = inject(MusicService);
   private readonly destroyRef = inject(DestroyRef);

   public readonly handler = input.required<MusicHandler>();
   public readonly currentSongTitle = computed(() => {
      if (this.musicService.hasError()) {
         return 'Interact with the app to start playing music!';
      }
      return this.musicService.currentSong()?.title ?? 'Unmute to start playing!';
   });
   public readonly muted = this.musicService.muted;
   private readonly volumeChange$ = new Subject<number>();

   public readonly overlayPositions = this.getOverlayPositions();
   public readonly volumeButtonHover$ = new BehaviorSubject(false);
   public readonly volumeChangerOverlayHover$ = new BehaviorSubject(false);
   public readonly isOverlayOpen = signal(false);
   private overlayCloseTimeout?: any;

   public ngOnInit(): void {
      this.musicService.playNextSong$.pipe(startWith(null), takeUntilDestroyed(this.destroyRef)).subscribe(song => {
         this.musicService.playSong(this.handler().chooseNextSong(song));
      });

      this.volumeChange$.pipe(throttleTime(100)).subscribe(value => this.musicService.setVolume(value));

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
      this.musicService.toggleMute();
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
