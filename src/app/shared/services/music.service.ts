import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { Song } from '../models';

@Injectable({
   providedIn: 'root'
})
export class MusicService {
   private static readonly DEFAULT_VOLUME = 0.1;

   private readonly audioPlayer = this.initAudioPlayer();
   private _currentSong?: Song;

   private readonly _songEnded$ = new Subject<Song>();

   public playSong(song: Song): void {
      this.audioPlayer.src = `assets/music/${song.context}/${song.filename}.mp3`;
      this.audioPlayer.play();
      this._currentSong = song;
   }

   public setVolume(volume: number): void {
      this.audioPlayer.volume = volume;
   }

   public get songEnded$(): Observable<Song> {
      return this._songEnded$.asObservable();
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
         this._songEnded$.next(this._currentSong!);
         delete this._currentSong;
      });
   }
}
