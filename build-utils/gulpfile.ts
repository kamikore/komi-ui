import { dest, src } from 'gulp'
import ts from 'gulp-typescript'
 

export const build = () => {
    return src('./src/*.ts')
        .pipe(ts())
        .pipe(dest('dist'))
} 

export default build