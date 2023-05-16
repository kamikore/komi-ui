import { dest, src, watch } from 'gulp'
import { themeRoot,themeOutput } from '@komi-ui/build-utils';
import {resolve} from 'node:path'
// import {copyFile} from 'node:fs/promise'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
// 选择编译器
const sass = gulpSass(dartSass);


// export const copyFullStyle = async () => {
//     await mkdir(path.resolve(kiOutput, 'dist'), { recursive: true })
//     await copyFile(
//         path.resolve(kiOutput, 'theme/index.css'),
//         path.resolve(kiOutput, 'dist/index.css')
//     )
// }



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
        return Promise.resolve()
    });
}


// gulp命令默认执行default任务
export default buildStyles

