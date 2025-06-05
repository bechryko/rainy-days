//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { GameMusicHandler } from './game-music-handler';
export { GameStatus } from './game-status.d';
//@endindex
