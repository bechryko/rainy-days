import { signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, interval, map, Observable, of, startWith, switchMap } from 'rxjs';

export function since(timestamp: number | null): Signal<string | null> {
   if (timestamp === null) {
      return signal(null);
   }

   return toSignal(since$(timestamp), { initialValue: null });
}

function since$(timestamp: number): Observable<string> {
   const oneMinute = 1000 * 60;
   const timeUntilMinute = oneMinute - ((Date.now() - timestamp) % oneMinute);

   return of(null).pipe(
      delay(timeUntilMinute),
      switchMap(() => interval(oneMinute).pipe(startWith(null))),
      startWith(null),
      map(() => Math.floor((Date.now() - timestamp) / oneMinute)),
      map(getSinceString)
   );
}

function getSinceString(minutesPassed: number): string {
   if (minutesPassed === 0) {
      return '< 1 minute ago';
   }
   if (minutesPassed < 60) {
      return `${minutesPassed} minute${plural(minutesPassed)} ago`;
   }

   const hoursPassed = Math.floor(minutesPassed / 60);
   if (hoursPassed < 60) {
      return `${hoursPassed} hour${plural(hoursPassed)} ago`;
   }

   const daysPassed = Math.floor(hoursPassed / 60);
   return `${daysPassed} day${plural(daysPassed)} ago`;
}

function plural(num: number): string {
   return num > 1 ? 's' : '';
}
