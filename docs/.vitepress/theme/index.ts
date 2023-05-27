import KomiUi from 'komi-ui'
import DefaultTheme from 'vitepress/theme'
import '../styles/var.css'
import { useData } from 'vitepress'
import {watchEffect} from 'vue'
import {inBrowser} from '../utils'

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(KomiUi)
    },
    setup() {
        const { lang } = useData()
        watchEffect(() => {
            
            if (inBrowser()) {
                localStorage.setItem('preferred_lang',lang.value)
            }
        })
    }
}