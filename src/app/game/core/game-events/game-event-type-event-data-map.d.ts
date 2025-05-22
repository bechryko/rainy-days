import { Building } from '../buildings';
import { GameEventType } from './game-event-type';

export interface GameEventTypeEventDataMap {
   [GameEventType.START_GAME]: null;
   [GameEventType.TOGGLE_PAUSE]: null;
   [GameEventType.SELECT_TOOLBAR_ITEM]: number;
   [GameEventType.UPDATE_SPAWN_TIMER]: number;
   [GameEventType.DESTINATION_CRITICAL_HEALTH]: number;
   [GameEventType.GAIN_SCORE]: null;
   [GameEventType.OPEN_CONTEXT_MENU]: Building;
   [GameEventType.CLOSE_CONTEXT_MENU]: null;
   [GameEventType.COMPLETE_TIMED_PAUSE]: null;
   [GameEventType.GAME_OVER]: boolean;
}
