//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { MusicState } from './music-state.d';
export { PersonalBestState } from './personal-best-state.d';
//@endindex
