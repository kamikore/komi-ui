import { watch,series } from 'gulp'
import {resolve} from 'node:path'
import {copyFile, mkdir} from 'node:fs/promises'
import {
  projRoot,
  buildRoot,
  themeRoot,
  kiOutput,
  kiPackage,
  themeOutput,
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
    
    // 样式入口
    // copyFile(
    //   resolve(themeOutput,'index.css'),
    //   resolve(kiOutput,'dist','index.css')
    // )
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
  runTask('vite build',buildRoot),
  // bundle theme
  runTask('pnpm build',resolve(themeRoot)),
  copyFiles
)

export default build