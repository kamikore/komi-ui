import { createApp } from 'vue'
import App from './src/App.vue'
import KomiUi from 'komi-ui'
// import '@komi-ui/theme'
// 或
import '@komi-ui/theme/dist/index.css'

const app = createApp(App)
app.use(KomiUi)
app.mount('#app')