export const locales = {
	root: {
      label: 'en-US',
      lang: 'en-US',
	  title:'en-US',
	  themeConfig: {
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
	  }
    },
	'zh-CN': {
      label: 'zh-CN',
      lang: 'zh-CN',
	  title: 'zh-CN',
	  themeConfig: {
		nav: [
		  { text: '指南', link: '/zh-CN/guide/installation' },
		  { text: '组件', link: '/zh-CN/components/button' },
		  { 
			text:'Translations',
			items: [
				{ text: 'English', link:''},
			]
		  }
		],
	  }
    },
}