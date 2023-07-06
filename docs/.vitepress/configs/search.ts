import type { DefaultTheme } from 'vitepress'


export const search:DefaultTheme.Config['search'] = {
	provider: 'local',
	options: {
		locales: {
			'zh-CN': {
				translations: {
				  button: {
				    buttonText: '搜索文档',
				    buttonAriaLabel: '搜索文档'
				  },
				  modal: {
				    noResultsText: '无法找到相关结果',
				    resetButtonTitle: '清除查询条件',
				    footer: {
				      selectText: '选择',
				      navigateText: '切换',
				      closeText: '关闭'
				    }
				  }
				}
			}
		}
	}
}

// export const search = {
// 	provider: 'algolia',
// 	options: {
// 		appId: 'R2IYF7ETH7',
// 		apiKey: '599cec31baffa4868cae4e79f180729b',
// 		indexName: 'docsearch',
// 	}
// }