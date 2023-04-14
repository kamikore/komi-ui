import { defineConfig } from 'vitepress'
import {sidebar} from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "komi-ui",
  description: "A Component Library for Vue 3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/en-US/guide/installation' },
      { text: '组件', link: '/en-US/components/button' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kamikore/komi-ui' }
    ]
  }
})
