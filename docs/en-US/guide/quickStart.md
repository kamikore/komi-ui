---
title: Quick Start
lang: en-US
---

# Quick Start
Adding KomiUi to your application.


## Full Import
```ts
// main.ts
import { createApp } from 'vue'
import komiUi from 'komi-ui'
import 'komi-ui/dist/index.css'
import App from './src/App.vue'

const app = createApp(App)
app.use(komiUi)
app.mount('#app')
```


## On-demand Import
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import {KiButton,KiInput} from 'komi-ui'
import 'komi-ui/theme/index.css'

const app = createApp(App)
app.component('KiButton',KiButton)
app.component('KiInput',KiInput)

app.mount('#app')
```

Using in a Vue Single-File Component (SFC).
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