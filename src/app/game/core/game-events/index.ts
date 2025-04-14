//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { GameEventHandler } from './game-event-handler';
export { GameEventType } from './game-event-type';
export { GameEventTypeEventDataMap } from './game-event-type-event-data-map.d';
//@endindex
