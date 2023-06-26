import { dest, src, watch, series } from 'gulp'
import { themeRoot,themeOutput, kiOutput } from '@komi-ui/build-utils';
import {resolve} from 'node:path'
import {copyFile} from 'node:fs/promises'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
// 选择编译器
const sass = gulpSass(dartSass);


export const copyStyle = async () => {
    await copyFile(
        resolve(themeOutput,'index.css'),
        resolve(kiOutput,'dist','index.css')
      )
}

// 编译sass
const buildStyles = () => {
    return src(resolve(themeRoot,'src/**/*.scss'))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        // .pipe(sourcemaps.write())
        .pipe(dest(themeOutput));
}


export const watchBuild = () => {
    watch('src/**/*.scss', () => {
        buildStyles()
        copyStyle()
        return Promise.resolve()
    });
}


// gulp命令默认执行default任务
export default series(buildStyles,copyStyle)

