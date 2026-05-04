import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
   selector: 'rd-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   imports: [RouterOutlet],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
   constructor() {
      document.addEventListener(
         'contextmenu',
         e => {
            e.preventDefault();
         },
         false
      );
   }
}
