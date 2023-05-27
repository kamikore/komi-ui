
(() => {
    console.log("执行了")
    const supportedLangs = [
        'en-US',
        'zh-CN',
    ]

    const langAlias = {
        en: 'en-US',
        zh: 'zh-CN',
    }
  
    const cacheKey = 'preferred_lang'
    const defaultLang = 'en-US'

    let userPreferredLang = localStorage.getItem(cacheKey) || navigator.language
    const language =
      langAlias[userPreferredLang] ||
      (supportedLangs.includes(userPreferredLang)
        ? userPreferredLang
        : defaultLang)
    localStorage.setItem(cacheKey, language)
    userPreferredLang = language

    // 重定向
    if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
      const toPath = [`/${userPreferredLang}`]
        // split('/'):  /en-US/guide/index.html
        .concat(location.pathname.split('/').slice(2))
        .join('/')
      location.pathname =
        toPath.endsWith('.html') || toPath.endsWith('/')
          ? toPath
          : toPath.concat('/')
    }
    
})()
  

