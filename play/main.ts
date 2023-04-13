import { createApp } from 'vue'
import App from './src/App.vue'
import KomiUi from 'komi-ui'

const app = createApp(App)

app.use(KomiUi)
app.mount('#app')