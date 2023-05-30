import KomiUi from 'komi-ui'
import DefaultTheme from 'vitepress/theme'
// 内部样式
import '../styles/index.css'
// 组件库样式，样式发布后删除，更换为 link 引入
import '../../../dist/komi-ui/theme/index.css'
import { globalComps } from '../../components'


export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(KomiUi)

        globalComps.forEach(([name, comp]) => {
            app.component(name, comp)
        })
    },
}