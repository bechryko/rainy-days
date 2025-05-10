//@index('./*.ts', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Controller } from './controller';
export { Toolbar } from './toolbar';
//@endindex
