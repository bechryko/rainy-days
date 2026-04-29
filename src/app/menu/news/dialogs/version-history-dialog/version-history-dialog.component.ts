import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';
import { ReversePipe } from '@rainy-days/shared/pipes';

interface VersionData {
   version: string;
   name?: string;
   isSnapshot?: boolean;
   releaseDate: Date;
   changes: ChangeItem[];
   childVersions?: VersionData[];
}

interface ChangeItem {
   description: string;
   children?: string[];
}

@Component({
   selector: 'rd-version-history-dialog',
   templateUrl: './version-history-dialog.component.html',
   styleUrl: './version-history-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [DialogCloseButtonComponent, DatePipe, ReversePipe]
})
export class VersionHistoryDialogComponent {
   public readonly versions: VersionData[] = [
      {
         version: '1.0',
         releaseDate: new Date(2025, 5, 12),
         changes: [
            {
               description: 'Added spawnable buildings',
               children: ['Spawners', 'Destinations']
            },
            {
               description: 'Added buildable buildings',
               children: ['Roads', 'Tubes', 'Colored gates', 'Timed gates']
            },
            {
               description: 'Added cars'
            },
            {
               description: 'Added 5 game speeds'
            },
            {
               description: 'Added menu and game music'
            },
            {
               description: 'Created menu'
            }
         ]
      }
   ];

   public selectedVersion = this.versions[this.versions.length - 1];
}
