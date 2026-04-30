import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';
import { ReversePipe } from '@rainy-days/shared/pipes';
import { appVersion } from '../../../../app-version';

interface VersionData {
   version: string;
   name?: string;
   isWIP?: boolean;
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
               description: 'Added menu',
               children: [
                  'Added Gameplay guide menu tile',
                  'Added Tips & tricks menu tile',
                  'Added Controls menu tile',
                  'Added Version history menu tile',
                  'Added Installation menu tile',
                  'Added Feedback menu tile',
                  'Added Roadmap menu tile',
                  'Added Setup game submenu'
               ]
            },
            {
               description: 'Added music to menu and game',
               children: [
                  'Added 2 menu songs (1-1 for day and night)',
                  'Added 3 early game songs',
                  'Added 4 late game songs (one of which plays rarely)'
               ]
            },
            {
               description: 'Added spawnable buildings',
               children: [
                  'Spawners and Destinations',
                  'Added context menu for them',
                  'Added statistics tracking for them'
               ]
            },
            {
               description: 'Added road-type buildable buildings',
               children: ['Roads and Tubes', 'Add the ability to connect them with editor tool']
            },
            {
               description: 'Added gate-type buildable buildings',
               children: ['Colored and Timed gates', 'Added context menu and controls for Timed gates']
            },
            {
               description: 'Added cars'
            },
            {
               description: 'Added 5 game speeds',
               children: ['x0 (paused), x1, x2, x4, x8']
            },
            {
               description: 'Added end of game screen',
               children: ['Added game seed on end of game screen']
            },
            {
               description: 'Added personal best tracking'
            },
            {
               description: 'Made the application installable as PWA'
            },
            {
               description: 'Added supported browsers',
               children: [
                  'Added support for Microsoft Edge 108+',
                  'Added support for Google Chrome 108+',
                  'Added support for Mozilla Firefox 121+',
                  'Added warning notification for unsupported browser'
               ]
            }
         ],
         childVersions: [
            {
               version: '1.0.1',
               releaseDate: new Date(),
               isWIP: true,
               changes: [
                  {
                     description: 'Made menu dialog styles more consistent'
                  },
                  {
                     description: 'Enriched version history with more details'
                  }
               ]
            }
         ]
      }
   ];

   public selectedVersion = this.getInitialSelectedVersion();

   private getInitialSelectedVersion(): VersionData {
      const currentVersion = this.versions
         .flatMap(v => [v, ...(v.childVersions ?? [])])
         .find(v => v.version === appVersion.versionNumber);
      if (currentVersion) {
         return currentVersion;
      }

      const latestMainVersion = this.versions[this.versions.length - 1];
      if (latestMainVersion.childVersions) {
         return latestMainVersion.childVersions[latestMainVersion.childVersions.length - 1];
      }
      return latestMainVersion;
   }
}
