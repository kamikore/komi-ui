---
title: Icon 图标
lang: en-US
---

# Icon 图标
Komi Ui import the set of common icons of Element Plus: [@element-plus/icons-vue](https://github.com/element-plus/element-plus-icons). If you want to view all available SVG icons or for more detailed information, you can refer to the description of icons in the official document of Element Plus: [Icon | Element Plus](https://element-plus.gitee.io/zh-CN/component/icon.html). The current page only provides a brief explanation of the usage of icon.


### Register All Icons
You can import all icons from @element-plus/icons-vue and register them globally, such that you can avoid to import operations during use.
```ts
// main.ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```


### Basic Usage
When there is no register them globally, import is required.
::: demo
icon/basic
:::


### Combined with ki-icon
Ki-icon has the same function as el-icon, providing additional attributes for the raw SVG icon. The size and color of SVG icon can be controlled through the `color` and `size` attributes.
::: demo
icon/ki-icon
:::

### Using SVG icon directly
::: demo
icon/svg
:::