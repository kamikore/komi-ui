import { watch,series } from 'gulp'
import {resolve} from 'node:path'
import {copyFile} from 'node:fs/promises'
import {
  projRoot,
  buildRoot,
  themeRoot,
  kiOutput,
  kiPackage,
  runTask
} from '@komi-ui/build-utils'

export const copyFiles = () =>
  // 返回promise
  Promise.all([

    copyFile(kiPackage, resolve(kiOutput, 'package.json')),
    copyFile(
      resolve(projRoot, 'README.md'),
      resolve(kiOutput, 'README.md')
    ),
  ])

export const watchBuild = () => {
  watch('../packages/components/**/src/*.vue', () => {
      series(build)
  });
}


export const build = series(
  // clean dist
  runTask('pnpm run clean:dist'),
  // bundle packages
  runTask('vite build', buildRoot),
  // bundle theme
  runTask('pnpm build',resolve(themeRoot)),
  copyFiles
)

export default build