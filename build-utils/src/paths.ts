import {resolve} from 'path'

export const projRoot = resolve(__dirname,'..','..')
export const pkgRoot = resolve(projRoot, 'packages')
export const themeRoot = resolve(pkgRoot, 'theme')
export const kiRoot = resolve(pkgRoot,'komi-ui')


// package.json
export const kiPackage = resolve(kiRoot, 'package.json')

// "/dist"
export const buildOutput = resolve(projRoot, 'dist')
// "/dist/komi-ui"
export const kiOutput = resolve(buildOutput, 'komi-ui')
// "/dist/komi-ui/theme"
export const themeOutput = resolve(kiOutput,'theme')