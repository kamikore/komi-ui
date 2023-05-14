import { createApp } from 'vue'
import App from './src/App.vue'
// import komiUi from 'komi-ui'
import komiUi from '../dist/komi-ui/es/komi-ui/index.mjs'


import '../dist/komi-ui/theme/index.css'


const app = createApp(App)
app.use(komiUi)
app.mount('#app')