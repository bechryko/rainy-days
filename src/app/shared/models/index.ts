//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { GameConfiguration } from './game-configuration.d';
export { MusicHandler } from './music-handler';
export { Song } from './song.d';
//@endindex
