import guideSidebar from '../i18n/pages/guide.json'
import componentsSidebar from '../i18n/pages/components.json'
import type { DefaultTheme } from 'vitepress'

// 构建时
function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(guideSidebar).map(([lang, val]) => 
      Object.entries(val).map(([dir, items]) => 
        {
          return [`/${lang}/${dir}/`, items]
        }
      ).flat()
    ))
}


function getComponentsSideBar() {
  return Object.fromEntries(
    Object.entries(componentsSidebar).map(([lang, val]) => 
      Object.entries(val).map(([dir, items]) => 
        {
          return [`/${lang}/${dir}/`, items]
        }
      ).flat()
    ))
}


export const sidebar: DefaultTheme.Config['sidebar'] = Object.assign(getGuideSidebar(), getComponentsSideBar())
