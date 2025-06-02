import { effect, Injectable, Signal, signal } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { Song } from '../models';

@Injectable({
   providedIn: 'root'
})
export class MusicService {
   private static readonly DEFAULT_VOLUME = 0.1;
   private static readonly SONG_PLAY_RETRY_TIME_MS = 500;
   private static readonly SONG_STOP_TIME_S = 5;

   private readonly audioPlayer = this.initAudioPlayer();
   private readonly _currentSong = signal<Song | null>(null);
   private readonly _muted = signal(false);
   private readonly _hasError = signal(false);

   private readonly _playNextSong$ = new Subject<Song | null>();
   private songPlayRetryTimeout?: any;
   private songStopTimeout?: any;

   constructor() {
      effect(() => {
         this.audioPlayer.muted = this._muted();
      });
   }

   public playSong(song: Song): void {
      if (this.songPlayRetryTimeout) {
         clearTimeout(this.songPlayRetryTimeout);
      }

      this.audioPlayer.src = `assets/music/${song.context}/${song.filename}.mp3`;
      this.audioPlayer
         .play()
         .then(() => {
            this._hasError.set(false);
            this._currentSong.set(song);
         })
         .catch(() => {
            this._hasError.set(true);
            this.songPlayRetryTimeout = setTimeout(() => this.playSong(song), MusicService.SONG_PLAY_RETRY_TIME_MS);
         });
   }

   public stopPlaying(): void {
      this.audioPlayer.src = '';
      this._currentSong.set(null);
   }

   public setVolume(volume: number): void {
      this.audioPlayer.volume = volume;
   }

   public toggleMute(): void {
      this._muted.update(muted => !muted);

      if (this._muted()) {
         this.songStopTimeout = setTimeout(() => this.stopPlaying(), MusicService.SONG_STOP_TIME_S * 1000);
      } else {
         if (this.songStopTimeout) {
            clearTimeout(this.songStopTimeout);
         }
         if (!this._currentSong()) {
            this._playNextSong$.next(null);
         }
      }
   }

   public get playNextSong$(): Observable<Song | null> {
      return this._playNextSong$.asObservable();
   }

   public get currentSong(): Signal<Song | null> {
      return this._currentSong.asReadonly();
   }

   public get muted(): Signal<boolean> {
      return this._muted.asReadonly();
   }

   public get hasError(): Signal<boolean> {
      return this._hasError.asReadonly();
   }

   public get volume(): number {
      return this.audioPlayer.volume;
   }

   private initAudioPlayer(): HTMLAudioElement {
      const player = new Audio();

      player.autoplay = false;
      player.controls = false;
      player.loop = false;
      player.muted = false;
      player.volume = MusicService.DEFAULT_VOLUME;

      this.initAudioPlayerEvents(player);

      return player;
   }

   private initAudioPlayerEvents(player: HTMLAudioElement): void {
      fromEvent(player, 'ended').subscribe(() => {
         this._currentSong.set(null);
         this._playNextSong$.next(this._currentSong()!);
      });
   }
}
