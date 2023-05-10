import { dest, parallel, series, src } from 'gulp'
import {join} from 'node:path'
import {copyFile} from 'node:fs/promises';
import {pkgRoot,buildOutput,kiOutput,kiPackage} from '@'
import ts from 'gulp-typescript'
 

export const copyFiles = () =>
  // 返回promise
  Promise.all([
    copyFile(kiPackage, join(kiOutput, 'package.json'))
  ])


export const buildPkg = () => {
    return src(join(pkgRoot,'**','*.ts'))
        .pipe(ts())
        .pipe(dest(buildOutput))
} 



export const build = parallel()

export default build