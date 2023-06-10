import KomiUi from 'komi-ui'
import DefaultTheme from 'vitepress/theme'
import '../styles/index.css'
import { useData } from 'vitepress'
import {watchEffect, onUnmounted} from 'vue'
import {globalComps} from '../../components'
import {inBrowser} from '../utils'
import '../../../dist/komi-ui/theme/index.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        globalComps.map(([name, comp]) => {
            app.component(name, comp)
        })
        app.use(KomiUi)

    },
    setup() {
        const supportedLangs = [
            'en-US',
            'zh-CN',
        ]
    
        const langAlias = {
            en: 'en-US',
            zh: 'zh-CN',
        }

        const cacheKey = 'preferred_lang'
        const defaultLang = "zh-CN"

        const { lang } = useData()

        // 监听页面language更改
        const stopWatch = watchEffect(() => {

            if (inBrowser()) {
                const language = langAlias[lang.value] || 
                (supportedLangs.includes(lang.value) ? lang.value : defaultLang)

                localStorage.setItem(cacheKey, language)

                // 重定向,需要在setItem之后
                // 解决域名路径重定向问题，仅需配置config:lang
                if (!location.pathname.startsWith(`/${language}`)) {
                    const toPath = [`/${language}`]
                    .concat(location.pathname.split('/').slice(2))
                    .join('/')

                    // format
                    location.pathname =
                        toPath.endsWith('.html') || toPath.endsWith('/')
                        ? toPath
                        : toPath.concat('/')
                }
            }
        })

        onUnmounted(() => {
            stopWatch()
        })
    }
}