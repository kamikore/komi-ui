import { defineConfig } from 'vitepress'
import {sidebar, locales} from './utils'

export default defineConfig({
  lang: 'en-US',
  title: "Komi ui",
  description: "A Component Library for Vue 3",
  head:[
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
	siteTitle: '',
	logo:'/komi-logo.svg',
	nav: [
	  { text: 'Guide', link: '/en-US/guide/installation' },
	  { text: 'Component', link: '/en-US/components/button' },
	  { 
		text:'Translations',
		items: [
			{ text: '中文', link: ''}
		]
	  }
	],
	locales,
	sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kamikore/komi-ui' }
    ],
	
	footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
