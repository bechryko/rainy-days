//@index(['./*', '!./*.ts'], (f, _) => `export * from '${f.path}';`)
export * from './models';
export * from './utils';
//@endindex
//@index('./*.ts', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Car } from './car';
export { Map } from './map';
export { Tile } from './tile';
//@endindex
