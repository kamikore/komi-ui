import type { App} from 'vue'
import { SFCWithInstall } from "./typescript"

// 给组件添加install方法
export const withInstall = <T>(plugin:T) => {
    // 合并T泛型到SFCWithInstall
  (plugin as SFCWithInstall<T>).install = (app: App): void => {
    // for (const comp of [main, ...Object.values(extra ?? {})]) {
    //   app.component(comp.name, comp)
    // }
    
    app.component(plugin.name, plugin)
  }

  return plugin as SFCWithInstall<T>
}
