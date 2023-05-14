import { dest, parallel, series, src } from 'gulp'
import {resolve} from 'node:path'
import {copyFile} from 'node:fs/promises';
import {projRoot,buildRoot,pkgRoot,buildOutput,kiOutput,kiPackage,runTask} from '@komi-ui/build-utils'
import ts from 'gulp-typescript'
 

export const copyFiles = () =>
  // 返回promise
  Promise.all([
    copyFile(kiPackage, resolve(kiOutput, 'package.json')),
    copyFile(
      resolve(projRoot, 'README.md'),
      resolve(kiOutput, 'README.md')
    ),
  ])

export const build = series(
  // clean dist
  runTask('pnpm run clean:dist'),
  // bundle packages
  runTask('vite build',buildRoot),
  // bundle theme
  runTask('pnpm run build',resolve(pkgRoot,'theme')),
  copyFiles
)

export default build