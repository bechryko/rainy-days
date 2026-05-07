import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';

@Component({
   selector: 'rd-developer-dialog',
   templateUrl: './developer-dialog.component.html',
   styleUrl: './developer-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [DialogCloseButtonComponent, MatTabsModule]
})
export class DeveloperDialogComponent {}
