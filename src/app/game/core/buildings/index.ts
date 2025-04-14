//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Building } from './building';
export { ColoredGate } from './colored-gate.building';
export { Destination } from './destination.building';
export { Gate } from './gate';
export { Spawner } from './spawner.building';
export { TimedGate } from './timed-gate.building';
//@endindex
