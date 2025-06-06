//@index('./*', (f, _) => `export { ${_.pascalCase(f.name.split('.')[0])} } from '${f.path}';`)
export { Browser } from './browser.d';
export { ControlPanelGroup } from './control-panel-group';
export { MenuMusicHandler } from './menu-music-handler';
//@endindex
