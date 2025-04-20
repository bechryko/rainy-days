import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Control {
   keys?: string[];
   keyNames?: string[];
   icon?: string;
   name: string;
   descriptions: string[];
}

@Component({
   selector: 'rd-controls-dialog',
   imports: [MatIconModule],
   templateUrl: './controls-dialog.component.html',
   styleUrl: './controls-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsDialogComponent {
   public readonly controls: Control[] = [
      {
         keyNames: ['Mouse Left'],
         icon: 'mouse',
         name: 'Primary action',
         descriptions: [
            'Build the selected building when there is',
            'Connect hovered roads when the editor tool is selected'
         ]
      },
      {
         keyNames: ['Mouse Right'],
         icon: 'mouse',
         name: 'Secondary action',
         descriptions: [
            'Delete the selected building when there is',
            'Open the context menu for the building (if it has) when the editor tool is selected'
         ]
      },
      {
         keys: ['0'],
         icon: 'keyboard',
         name: 'Toolbar item: editor tool',
         descriptions: ['Switch to the editor tool to connect different roads and open the context menus of buildings']
      },
      {
         keys: Array.from({ length: 5 }, (_, i) => String(i + 1)),
         icon: 'keyboard',
         name: 'Toolbar items: buildings',
         descriptions: ['Switch between the buildable objects in the toolbar']
      },
      {
         keyNames: ['Mouse Scroll'],
         icon: 'mouse',
         name: 'Scroll through toolbar',
         descriptions: ['Scroll through the toolbar items, with cycle enabled']
      },
      {
         keyNames: ['Space'],
         icon: 'keyboard',
         name: 'Pause / Resume',
         descriptions: ['Pause or resume the game']
      },
      {
         keys: ['Q', 'W', 'E', 'R'],
         icon: 'keyboard',
         name: 'Change game speed',
         descriptions: ['Change the game speed to x1, x2, x4 and x8, respectively']
      }
   ];
}
