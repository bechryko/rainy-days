import { inject, Injectable, Signal, signal } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { Song } from '../models';
import { MusicState } from '../state';
import { StorageID, StorageService } from './storage.service';

@Injectable({
   providedIn: 'root'
})
export class MusicService {
   private static readonly DEFAULT_VOLUME = 0.1;
   private static readonly MAX_SONG_RETRY_TIME_MS = 10_000;
   private static readonly SONG_STOP_TIME_S = 5;
   private static readonly NO_INTERACTION_ERROR_MESSAGE =
      "play() failed because the user didn't interact with the document first.";

   private readonly storageService = inject(StorageService);

   private readonly audioPlayer = this.initAudioPlayer();
   private readonly _currentSong = signal<Song | null>(null);
   private readonly _errorMessage = signal<string | null>(null);

   private readonly _playNextSong$ = new Subject<Song | null>();
   private songPlayRetryTimeout?: any;
   private songStopTimeout?: any;
   private songRetryTimeMs = 500;

   public playSong(song: Song): void {
      if (this.songPlayRetryTimeout) {
         clearTimeout(this.songPlayRetryTimeout);
      }

      this.audioPlayer.src = `assets/music/${song.context}/${song.filename}.mp3`;
      this.audioPlayer
         .play()
         .then(() => {
            this._errorMessage.set(null);
            this._currentSong.set(song);
         })
         .catch((error: Error) => {
            this._errorMessage.set(this.getErrorMessage(error));
            this.songPlayRetryTimeout = setTimeout(() => this.playSong(song), this.songRetryTimeMs);
            this.songRetryTimeMs = Math.min(this.songRetryTimeMs * 2, MusicService.MAX_SONG_RETRY_TIME_MS);
         });
   }

   public stopPlaying(): void {
      this.audioPlayer.src = '';
      this._currentSong.set(null);
   }

   public setVolume(volume: number): void {
      this.audioPlayer.volume = volume;
      this.updateMusicState({ volume });
   }

   public toggleMute(): boolean {
      const muted = !this.audioPlayer.muted;
      this.audioPlayer.muted = muted;
      this.updateMusicState({ isMuted: muted });

      if (muted) {
         this.songStopTimeout = setTimeout(() => this.stopPlaying(), MusicService.SONG_STOP_TIME_S * 1000);
      } else {
         if (this.songStopTimeout) {
            clearTimeout(this.songStopTimeout);
         }
         if (!this._currentSong()) {
            this._playNextSong$.next(null);
         }
      }

      return muted;
   }

   public get playNextSong$(): Observable<Song | null> {
      return this._playNextSong$.asObservable();
   }

   public get currentSong(): Signal<Song | null> {
      return this._currentSong.asReadonly();
   }

   public get errorMessage(): Signal<string | null> {
      return this._errorMessage.asReadonly();
   }

   public get volume(): number {
      return this.audioPlayer.volume;
   }

   public get muted(): boolean {
      return this.audioPlayer.muted;
   }

   private initAudioPlayer(): HTMLAudioElement {
      const player = new Audio();
      const initialMusicState = this.storageService.read(StorageID.MUSIC);

      player.autoplay = false;
      player.controls = false;
      player.loop = false;
      player.volume = initialMusicState.volume ?? MusicService.DEFAULT_VOLUME;
      player.muted = initialMusicState.isMuted;

      this.initAudioPlayerEvents(player);

      return player;
   }

   private initAudioPlayerEvents(player: HTMLAudioElement): void {
      fromEvent(player, 'ended').subscribe(() => {
         this._playNextSong$.next(this._currentSong());
         this._currentSong.set(null);
      });
   }

   private updateMusicState(updateObject: Partial<MusicState>): void {
      this.storageService.save(StorageID.MUSIC, {
         ...this.storageService.read(StorageID.MUSIC),
         ...updateObject
      });
   }

   private getErrorMessage(error: Error): string {
      return error.message === MusicService.NO_INTERACTION_ERROR_MESSAGE
         ? 'Interact with the app to start playing music!'
         : "Can't load music";
   }
}
