import { distinctUntilChanged, filter, map, Observable, pipe, shareReplay, startWith, Subject, Subscription, throttleTime } from 'rxjs';
import { Toolbar } from '../control/toolbar';
import { GameEventType } from './game-event-type';
import { GameEventTypeEventDataMap } from './game-event-type-event-data-map';

export class GameEventHandler {
   private static readonly DESTINATION_HEALTH_MESSAGE_COOLDOWN_S = 10;

   private static readonly EVENT_TYPE_EXTRA_PIPELINE_MAP: Record<GameEventType, any> = {
      [GameEventType.IS_GAME_GOING]: pipe(),
      [GameEventType.TOGGLE_PAUSE]: pipe(),
      [GameEventType.SELECT_TOOLBAR_ITEM]: pipe(startWith(Toolbar.INITIAL_SELECTED_ITEM_KEY), distinctUntilChanged(), shareReplay(1)),
      [GameEventType.UPDATE_SPAWN_TIMER]: pipe(distinctUntilChanged(), shareReplay(1)),
      [GameEventType.DESTINATION_CRITICAL_HEALTH]: pipe(throttleTime(GameEventHandler.DESTINATION_HEALTH_MESSAGE_COOLDOWN_S * 1000)),
      [GameEventType.GAIN_SCORE]: pipe(),
      [GameEventType.OPEN_CONTEXT_MENU]: pipe(shareReplay(1)),
      [GameEventType.CLOSE_CONTEXT_MENU]: pipe(),
      [GameEventType.COMPLETE_TIMED_PAUSE]: pipe()
   };

   private static instance?: GameEventHandler;

   public static getInstance(): GameEventHandler {
      if (!this.instance) {
         this.instance = new GameEventHandler();
      }
      return this.instance;
   }

   public static clean(): void {
      GameEventHandler.getInstance().subscriptions.forEach(sub => sub.unsubscribe());
      GameEventHandler.instance = undefined;
   }

   private readonly mergedEvents$ = new Subject<{ type: GameEventType; data: unknown }>();
   private readonly eventMap: Record<GameEventType, Observable<unknown>> = {} as any;
   private readonly subscriptions: Subscription[] = [];

   constructor() {
      Object.values(GameEventType).forEach(type => {
         this.eventMap[type] = this.mergedEvents$.pipe(
            filter(event => event.type === type),
            map(event => event.data),
            GameEventHandler.EVENT_TYPE_EXTRA_PIPELINE_MAP[type]
         );
      });
   }

   public emitEvent<T extends GameEventType>(type: T, data: GameEventTypeEventDataMap[T]): void {
      this.mergedEvents$.next({ type, data });
   }

   public watchEvents<T extends GameEventType>(type: T, observer: (value: GameEventTypeEventDataMap[T]) => void): void {
      this.subscriptions.push(this.eventMap[type].subscribe(value => observer(value as GameEventTypeEventDataMap[T])));
   }
}
