<p align="center">
  <a href="">
    <img width="200px" src="https://komi-ui.netlify.app/logo.svg">
  </a>
</p>


<h1 align="center">Komi Ui - Vue 3 Components</h1>

* Vue 3 Composition API
* Written in TypeScript

KomiUi is a Component Library for Vue 3 that follows the design style of BaseWeb, which is a design system comprised of modern, responsive, living components for React. For more details, please refer to [BaseWeb](https://baseweb.design).



## Usage

On npm, you can find KomiUi as `komi-ui`.

Add `komi-ui` and its peer dependencies to your project:

```bash
# using pnpm
pnpm add komi-ui vue

# using npm
npm install komi-ui vue
```

Setup KomiUi to your application, or you should go ahead visit [Setup]()

```ts
//main.ts
import { createApp } from 'vue'
import komiUi from 'komi-ui'
import 'komi-ui/dist/index.css'
import App from './src/App.vue'

const app = createApp(App)
app.use(komiUi)
app.mount('#app')
```
