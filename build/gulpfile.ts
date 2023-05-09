import { dest, parallel, series, src } from 'gulp'
import {join} from 'node:path'
import {copyFile} from 'node:fs/promises';
import {pkgRoot,buildOutput,kiOutput,kiPackage} from './src/path'
import ts from 'gulp-typescript'
import VueSFCPlugin from 'gulp-vue-sfc'
 

export const copyFiles = () =>
  // 返回promise
  Promise.all([
    copyFile(kiPackage, join(kiOutput, 'package.json'))
  ])


export const compileVueSFC = () => {
    return src(join(pkgRoot,'**','*.vue'))
      .pipe(VueSFCPlugin())
      .pipe(dest('./dist'))
  }


export const buildPkg = () => {
    return src(join(pkgRoot,'**','*.ts'))
        .pipe(ts())
        .pipe(dest(buildOutput))
} 



export const build = parallel(compileVueSFC)

export default build