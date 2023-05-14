import {spawn} from 'node:child_process'
import { projRoot } from './paths'


// 执行命令线程
export const run = (cmd: string,cwd:string = projRoot) => 
    new Promise((resolve,reject) => {
        const childProcess = spawn(cmd,{
            cwd,
            shell: process.platform === 'win32',
        })

        // 子进程关闭
        childProcess.on('close',(code) => {
           if (code === 0) resolve('Done')
           else
            reject(new Error(`Command failed. \n Command: ${cmd} \n Code: ${code}`))
        })

        // 线程无任务执行退出
        process.on('exit', () => childProcess.kill('SIGHUP'))
    })
