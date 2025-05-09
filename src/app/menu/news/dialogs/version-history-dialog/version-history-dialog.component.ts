import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';

interface VersionData {
   version: string;
   name?: string;
   isSnapshot?: boolean;
   changes: ChangeItem[];
   childVersions?: VersionData[];
}

interface ChangeItem {
   description: string;
   children?: string[];
}

@Component({
   selector: 'rd-version-history-dialog',
   imports: [DialogCloseButtonComponent, MatTreeModule, MatButtonModule, MatIconModule],
   templateUrl: './version-history-dialog.component.html',
   styleUrl: './version-history-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionHistoryDialogComponent {
   public readonly versions: VersionData[] = [
      {
         version: '1.0',
         isSnapshot: true,
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
            }
         ]
      }
   ];

   public readonly childrenAccessor = (node: VersionData) => node.childVersions ?? [];
   public readonly hasChild = (_: number, node: VersionData) =>
      Boolean(node.childVersions) && node.childVersions!.length > 0;

   public displayedVersion?: VersionData;

   public selectVersionToDisplay(version: string, root = this.versions): void {
      this.versions.forEach(v => {
         if (v.version === version) {
            this.displayedVersion = v;
         } else if (v.childVersions) {
            this.selectVersionToDisplay(version, v.childVersions);
         }
      });
   }
}
