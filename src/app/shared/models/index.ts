//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { MusicHandler } from './music-handler';
export { Song } from './song';
//@endindex
