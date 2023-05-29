import KomiUi from 'komi-ui'
import DefaultTheme from 'vitepress/theme'
import '../styles/index.css'
import { globalComps } from '../components'


export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(KomiUi)

        globalComps.forEach(([name, comp]) => {
            app.component(name, comp)
        })
    },
}