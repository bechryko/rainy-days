import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogCloseButtonComponent } from '@rainy-days/shared/components';

@Component({
   selector: 'rd-roadmap-dialog',
   imports: [DialogCloseButtonComponent],
   templateUrl: './roadmap-dialog.component.html',
   styleUrl: './roadmap-dialog.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoadmapDialogComponent {}
