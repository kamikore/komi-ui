---
title: Icon 图标
lang: zh-CN
---

# Icon 图标
Komi Ui导入了Element Plus官方的图标集合 [@element-plus/icons-vue](https://github.com/element-plus/element-plus-icons)，若想查看所有可用的 SVG 图标或是更为详细地可以参考Element Plus官方文档中对icon的说明：[Icon 图标 | Element Plus](https://element-plus.gitee.io/zh-CN/component/icon.html)，当前文档仅对icon的使用作简单说明。


### 安装

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```


### 注册所有图标
可以从 @element-plus/icons-vue 中导入所有图标并进行全局注册，这样能够避免在使用时，需要单独导入操作。
```ts
// main.ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```


### 基本使用
当没有全局注册时，需要额外单独进行引入。
::: demo
icon/basic
:::


### 搭配ki-icon使用
ki-icon作用与el-icon相同，为 raw SVG 图标提供额外的属性。可以通过 `color`、`size` 控制SVG图标的大小、颜色。
::: demo
icon/ki-icon
:::

### 直接使用 SVG 图标
::: demo
icon/svg
:::