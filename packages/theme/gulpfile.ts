import { dest, src } from 'gulp'
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// 编译sass
function build() {
    return src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist'));
}



// gulp命令默认执行default任务
export default build