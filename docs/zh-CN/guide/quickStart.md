---
title: 快速开始
lang: zh-CN
---

# 快速开始
添加KomiUi到项目中


## 完整引入
```ts
// 全局配置文件 main.ts
import { createApp } from 'vue'
import komiUi from 'komi-ui'
import 'komi-ui/dist/index.css'
import App from './src/App.vue'

const app = createApp(App)
app.use(komiUi)
app.mount('#app')
```


## 按需引入
```ts
// 全局配置文件 main.ts
import { createApp } from 'vue'
import App from './App.vue'
import {KiButton,KiInput} from 'komi-ui'
import 'komi-ui/theme/index.css'

const app = createApp(App)
app.component('KiButton',KiButton)
app.component('KiInput',KiInput)

app.mount('#app')
```

SFC单文件组件中引用
```vue
<!-- Setup script -->
<template>
  <ki-button>Hello</ki-button>
</template>
<script setup lang="ts">
import {KiButton} from 'komi-ui'

</script>
```

```vue
<!-- Options API -->
<template>
  <ki-button>Hello</ki-button>
</template>
<script lang="ts">
  import { KiButton } from 'komi-ui'
  export default {
    components: { KiButton },
  }
</script>
```