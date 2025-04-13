//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { BasicRoad } from './basic-road.road';
export { Road } from './road';
export { Tube } from './tube.road';
//@endindex
