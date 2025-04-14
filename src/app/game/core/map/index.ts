//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Car } from './car';
export { Tile } from './tile';
//@endindex
