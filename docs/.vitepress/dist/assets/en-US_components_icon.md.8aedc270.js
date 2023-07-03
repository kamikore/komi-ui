import{_ as c,D as i,o as a,c as r,A as l,B as n,a2 as t,O as D,z as s,a as e,G as p}from"./chunks/framework.fad14ccc.js";const S=JSON.parse('{"title":"Icon","description":"","frontmatter":{"title":"Icon","lang":"en-US"},"headers":[],"relativePath":"en-US/components/icon.md","filePath":"en-US/components/icon.md"}'),A={name:"en-US/components/icon.md"},C=D(`<h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h1><p>Komi Ui import the set of common icons of Element Plus: <a href="https://github.com/element-plus/element-plus-icons" target="_blank" rel="noreferrer">@element-plus/icons-vue</a>. If you want to view all available SVG icons or for more detailed information, you can refer to the description of icons in the official document of Element Plus: <a href="https://element-plus.gitee.io/zh-CN/component/icon.html" target="_blank" rel="noreferrer">Icon | Element Plus</a>. The current page only provides a brief explanation of the usage of icon.</p><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Choose a package manager you like.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># NPM</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@element-plus/icons-vue</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@element-plus/icons-vue</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@element-plus/icons-vue</span></span></code></pre></div><h3 id="register-all-icons" tabindex="-1">Register All Icons <a class="header-anchor" href="#register-all-icons" aria-label="Permalink to &quot;Register All Icons&quot;">​</a></h3><p>You can import all icons from @element-plus/icons-vue and register them globally, such that you can avoid to import operations during use.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> ElementPlusIconsVue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@element-plus/icons-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> component</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">entries</span><span style="color:#A6ACCD;">(ElementPlusIconsVue)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">component</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><p>When there is no register them globally, import is required.</p>`,9),h=s("p",null,"icon/basic",-1),y=s("h3",{id:"combined-with-ki-icon",tabindex:"-1"},[e("Combined with ki-icon "),s("a",{class:"header-anchor",href:"#combined-with-ki-icon","aria-label":'Permalink to "Combined with ki-icon"'},"​")],-1),m=s("p",null,[e("Ki-icon has the same function as el-icon, providing additional attributes for the raw SVG icon. The size and color of SVG icon can be controlled through the "),s("code",null,"color"),e(" and "),s("code",null,"size"),e(" attributes.")],-1),d=s("p",null,"icon/ki-icon",-1),u=s("h3",{id:"using-svg-icon-directly",tabindex:"-1"},[e("Using SVG icon directly "),s("a",{class:"header-anchor",href:"#using-svg-icon-directly","aria-label":'Permalink to "Using SVG icon directly"'},"​")],-1),E=s("p",null,"icon/svg",-1);function F(g,f,_,B,b,k){const o=i("Demo");return a(),r("div",null,[C,(a(),l(t,null,{default:n(()=>[p(o,{path:"icon/basic",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3CEdit%20%2F%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7BEdit%7D%20from%20'%40element-plus%2Ficons-vue'%0D%0A%3C%2Fscript%3E%0D%0A"},{default:n(()=>[h]),_:1})]),_:1})),y,m,(a(),l(t,null,{default:n(()=>[p(o,{path:"icon/ki-icon",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-icon%20size%3D%2220%22%20color%3D%22gray%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CEdit%20%2F%3E%0D%0A%20%20%20%20%3C%2Fki-icon%3E%0D%0A%20%20%20%20%3Cki-icon%20size%3D%2230%22%20color%3D%22gray%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CSearch%20%2F%3E%0D%0A%20%20%20%20%3C%2Fki-icon%3E%0D%0A%20%20%20%20%3Cki-icon%20size%3D%2240%22%20color%3D%22gray%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CCheck%20%2F%3E%0D%0A%20%20%20%20%3C%2Fki-icon%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%0D%0A%20%20%20%20Edit%2C%0D%0A%20%20%20%20Search%2C%0D%0A%20%20%20%20Check%0D%0A%7D%20from%20'%40element-plus%2Ficons-vue'%0D%0A%3C%2Fscript%3E%0D%0A"},{default:n(()=>[d]),_:1})]),_:1})),u,(a(),l(t,null,{default:n(()=>[p(o,{path:"icon/svg",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cdiv%20style%3D%22font-size%3A%2020px%22%3E%0D%0A%20%20%20%20%20%20%20%20%3C!--%20%E7%94%B1%E4%BA%8ESVG%E5%9B%BE%E6%A0%87%E9%BB%98%E8%AE%A4%E4%B8%8D%E6%90%BA%E5%B8%A6%E4%BB%BB%E4%BD%95%E5%B1%9E%E6%80%A7%20--%3E%0D%0A%20%20%20%20%20%20%20%20%3C!--%20%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9B%B4%E6%8E%A5%E6%8F%90%E4%BE%9B%E5%AE%83%E4%BB%AC%20--%3E%0D%0A%20%20%20%20%20%20%20%20%3CEdit%20style%3D%22width%3A%201em%3B%20height%3A%201em%3B%20margin-right%3A%208px%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3CShare%20style%3D%22width%3A%201em%3B%20height%3A%201em%3B%20margin-right%3A%208px%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3CDelete%20style%3D%22width%3A%201em%3B%20height%3A%201em%3B%20margin-right%3A%208px%22%20%2F%3E%0D%0A%20%20%20%20%20%20%20%20%3CSearch%20style%3D%22width%3A%201em%3B%20height%3A%201em%3B%20margin-right%3A%208px%22%20%2F%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0D%0Aimport%20%7B%0D%0A%20%20%20%20Edit%2C%0D%0A%20%20%20%20Share%2C%0D%0A%20%20%20%20Delete%2C%0D%0A%20%20%20%20Search%0D%0A%7D%20from%20'%40element-plus%2Ficons-vue'%20%0D%0A%3C%2Fscript%3E"},{default:n(()=>[E]),_:1})]),_:1}))])}const x=c(A,[["render",F]]);export{S as __pageData,x as default};
