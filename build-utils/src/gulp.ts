import {run} from './process'

export function runTask(cmd:string,cwd:string) {
    return () =>  run(cmd,cwd)
}