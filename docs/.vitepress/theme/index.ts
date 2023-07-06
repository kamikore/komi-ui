//import KomiUi from 'komi-ui'
// import KomiUi from '../../../packages/komi-ui/index'
import 'komi-ui/dist/index.css'
// import '../../../dist/komi-ui/dist/index.css'
import DefaultTheme from 'vitepress/theme'
import '../styles/index.css'
import { useData } from 'vitepress'
import {computed, watchEffect, onUnmounted} from 'vue'
import {globalComps} from '../../components'
import {inBrowser} from '../utils'


export default {
    extends: DefaultTheme,
    async enhanceApp({ app, router, siteData }) {
        if (!import.meta.env.SSR) {
            const KomiUi = await import('komi-ui')
            app.use(KomiUi)

            globalComps.map(([name, comp]) => {
                app.component(name, comp)
            })
        }

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
        const defaultLang = "en-US"

        const { lang } = useData()
        const preferred_lang = computed(() => localStorage.getItem(cacheKey))

        // 监听页面language更改
        const stopWatch = watchEffect(() => {
            if (inBrowser()) {
                let language = langAlias[lang.value] || 
                (supportedLangs.includes(lang.value) ? lang.value : defaultLang)

                // path为空的情况，优先以storage重定向
                if(location.pathname == '/' && preferred_lang.value) {
                    console.log('null',preferred_lang.value)
                    language = preferred_lang.value
                }
                    
                localStorage.setItem(cacheKey, language)

                // 重定向,需要在setItem之后
                // 解决域名路径重定向问题，仅需配置config:lang
                if (!location.pathname.startsWith(`/${language}`) && location.pathname !== '') {
                    localStorage.setItem(cacheKey, language)
                    const toPath = [`/${language}`]
                    .concat(location.pathname.split('/').slice(2))
                    .join('/')

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