"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var node_child_process_1 = require("node:child_process");
var paths_1 = require("./paths");
// 执行命令线程
var run = function (cmd, cwd) {
    if (cwd === void 0) { cwd = paths_1.projRoot; }
    return new Promise(function (resolve, reject) {
        console.log("run:", cmd);
        console.log("cwd:", cwd);
        var childProcess = (0, node_child_process_1.spawn)(cmd, {
            cwd: cwd,
            shell: process.platform === 'win32'
        });
        // 子进程关闭
        childProcess.on('close', function (code) {
            if (code === 0)
                resolve('Done');
            else
                reject(new Error("Command failed. \n Command: ".concat(cmd, " \n Code: ").concat(code)));
        });
        // 线程无任务执行退出
        process.on('exit', function () { return childProcess.kill('SIGHUP'); });
    });
};
exports.run = run;
