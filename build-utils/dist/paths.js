"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vpRoot = exports.docRoot = exports.themeOutput = exports.kiOutput = exports.buildOutput = exports.kiPackage = exports.buildRoot = exports.kiRoot = exports.themeRoot = exports.pkgRoot = exports.projRoot = void 0;
var path_1 = require("path");
exports.projRoot = (0, path_1.resolve)(__dirname, '..', '..');
exports.pkgRoot = (0, path_1.resolve)(exports.projRoot, 'packages');
exports.themeRoot = (0, path_1.resolve)(exports.pkgRoot, 'theme');
exports.kiRoot = (0, path_1.resolve)(exports.pkgRoot, 'komi-ui');
exports.buildRoot = (0, path_1.resolve)(exports.projRoot, 'build');
// package.json
exports.kiPackage = (0, path_1.resolve)(exports.kiRoot, 'package.json');
// "/dist"
exports.buildOutput = (0, path_1.resolve)(exports.projRoot, 'dist');
// "/dist/komi-ui"
exports.kiOutput = (0, path_1.resolve)(exports.buildOutput, 'komi-ui');
// "/dist/komi-ui/theme"
exports.themeOutput = (0, path_1.resolve)(exports.kiOutput, 'theme');
// docs
exports.docRoot = (0, path_1.resolve)(exports.projRoot, 'docs');
exports.vpRoot = (0, path_1.resolve)(exports.docRoot, '.vitepress');
