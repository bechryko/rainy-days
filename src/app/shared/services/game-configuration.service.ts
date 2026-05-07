import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { gameConfigurations } from '../constants';
import { GameConfigurationKey } from '../enums';
import { GameConfiguration } from '../models';

@Injectable({
   providedIn: 'root'
})
export class GameConfigurationService {
   private static readonly SEED_QUERY_PARAM = 'seed';

   private readonly route = inject(ActivatedRoute);

   private readonly queryParamMap = toSignal(this.route.queryParamMap);

   private gameConfiguration?: GameConfiguration;

   public setConfiguration(key: GameConfigurationKey, seed?: string) {
      this.gameConfiguration = {
         ...gameConfigurations[key],
         seed
      };
   }

   public useConfiguration(): GameConfiguration {
      const configuration = this.gameConfiguration ?? { ...gameConfigurations[GameConfigurationKey.DEFAULT] };
      delete this.gameConfiguration;

      this.addQueryParamsToConfiguration(configuration);

      return configuration;
   }

   private addQueryParamsToConfiguration(configuration: GameConfiguration): void {
      const seedQueryParam = this.queryParamMap()?.get(GameConfigurationService.SEED_QUERY_PARAM);
      if (!configuration.seed && seedQueryParam) {
         configuration.seed = seedQueryParam;
      }
   }
}
