"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTask = void 0;
var process_1 = require("./process");
function runTask(cmd, cwd) {
    return function () { return (0, process_1.run)(cmd, cwd); };
}
exports.runTask = runTask;
