import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NewsObject, PatchNote, TipObject } from '../model';
import { gameTips, patchNotes, trendingNews } from '../textObjects';

@Component({
   selector: 'rd-news',
   templateUrl: './news.component.html',
   styleUrls: ['./news.component.scss'],
   imports: [MatTabGroup, MatTab],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
   readonly gameVersion = 'Beta 1';

   trendingNews: NewsObject[] = [];
   latestPatchNote?: PatchNote;
   currentTips: TipObject[] = [];

   constructor() { }

   ngOnInit() {
      this.trendingNews = trendingNews;
      this.latestPatchNote = patchNotes[patchNotes.length - 1];
      this.currentTips = gameTips.filter(tip => tip.version === this.gameVersion)[0].tips;
   }
}
