---
title: 安装
lang: zh-CN
---

# 安装
项目依赖于新版 Vue 3.3，一些实验新特性在正式版中得到了支持，使得组件开发更为便捷，同时可以剔除一些Vue扩展库。

## 包管理器安装
推荐使用 `pnpm` 包管理器安装KomiUi
```bash
# pnpm
pnpm add komi-ui vue

# npm
npm install komi-ui vue
```


## 浏览器直接引入
可以通过在浏览器中使用HTML标签引入 KomiUi，这样能够得到一个 `KomiUi`全局变量。
npm提供了不同的CDN服务，当访问CDN链接时会重定向到对应的文件资源链接。不同的CDN提供商的引入方式如下：


### unpkg
```html
<head>
    <!-- Import Vue 3 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- Import component library -->
    <script src="https://unpkg.com/komi-ui"></script>
    <!-- Import style -->
    <link rel="stylesheet" href="https://unpkg.com/komi-ui/dist/index.css" />
</head>
```


### jsDelivr
```html
<head>
    <!-- Import Vue 3 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"></script>
    <!-- Import component library -->
    <script src="https://cdn.jsdelivr.net/npm/komi-ui"></script>
    <!-- Import style -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/komi-ui/dist/index.css" />
</head>
```