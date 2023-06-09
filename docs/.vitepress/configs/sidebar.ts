import guideSidebar from '../i18n/pages/guide.json'
import componentsSidebar from '../i18n/pages/components.json'

// 构建时
function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(guideSidebar).map(([lang, val]) => 
      Object.entries(val).map(([dir, items]) => 
        {
          console.log(dir, items)
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
          console.log(dir, items)
          return [`/${lang}/${dir}/`, items]
        }
      ).flat()
    ))
}


export const sidebar = Object.assign(getGuideSidebar(), getComponentsSideBar())


// export const sidebar = {
//   '/en-US/guide/': [
//       {
//           text: 'Guide',
//           items: [
//             { text: 'Installation', link: '/en-US/guide/installation' },
//             { text: 'Usage', link: '/en-US/guide/usage' }
//           ]
//       }
// 	],
//   '/en-US/components/': [
//     {
//         text: 'Components',
//         items: [
//           { text: 'Button', link: '/en-US/components/button' },
//           { text: 'Input', link: '/en-US/components/input' },
//           { text: 'Popover', link: '/en-US/components/popover' },
//           { text: 'Dropdown', link: '/en-US/components/dropdown' },
//         ]
//     }
//   ]
// }