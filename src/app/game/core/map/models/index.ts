//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Color } from './color.d';
export { Direction } from './direction';
//@endindex
