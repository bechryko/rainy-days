import { GameConfigurationKey } from '../enums';
import { GameConfiguration } from '../models';

export const gameConfigurations: Record<GameConfigurationKey, GameConfiguration> = {
   [GameConfigurationKey.DEFAULT]: {}
};
