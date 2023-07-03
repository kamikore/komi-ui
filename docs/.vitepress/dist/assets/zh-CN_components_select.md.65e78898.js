import{s as c}from"./chunks/select.e41fba76.js";import{D as s,o as D,c as p,A,B as l,a2 as o,z as e,a as t,G as a,b as C}from"./chunks/framework.fad14ccc.js";const r=e("h1",{id:"select-选择器",tabindex:"-1"},[t("Select 选择器 "),e("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1),u=e("p",null,"select/basic",-1),d=e("h3",{id:"基本使用",tabindex:"-1"},[t("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),h=e("p",null,"当选项过多时，采用Select能够以较小空间展示更多选项。",-1),m=e("p",null,[e("code",null,"v-model"),t(" 的值为当前被选中的 option 的 "),e("code",null,"value"),t(" 属性值。")],-1),_=e("p",null,"select/basic",-1),f=e("h3",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),O=e("p",null,[t("使用 "),e("code",null,"disabled"),t(" 属性来控制选择器是否为禁用状态。该属性接受一个 "),e("code",null,"Boolean"),t(" 类型的值")],-1),v=e("p",null,"select/disabled",-1),b=e("h3",{id:"菜单最大高度",tabindex:"-1"},[t("菜单最大高度 "),e("a",{class:"header-anchor",href:"#菜单最大高度","aria-label":'Permalink to "菜单最大高度"'},"​")],-1),B=e("p",null,[t("默认情况下Menu会根据内容自适应高度，设置 "),e("code",null,"maxHeight"),t(" 能够在内容超出指定最大高度时，显示滚动条。")],-1),E=e("p",null,"select/maxHeight",-1),N=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{"title":"Select 选择器","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/components/select.md","filePath":"zh-CN/components/select.md"}'),k={name:"zh-CN/components/select.md"},w=Object.assign(k,{setup(g){return(x,F)=>{const i=s("Panel"),n=s("Demo");return D(),p("div",null,[r,(D(),A(o,null,{default:l(()=>[a(i,{configs:C(c),source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-select%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Please%20Select%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3C%2Fki-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%2C%20watchEffect%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20ref('Option1')%0D%0A%0D%0Aconst%20options%20%3D%20%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option1'%2C%0D%0A%20%20%20%20label%3A%20'Option1'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option2'%2C%0D%0A%20%20%20%20label%3A%20'Option2'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option3'%2C%0D%0A%20%20%20%20label%3A%20'Option3'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option4'%2C%0D%0A%20%20%20%20label%3A%20'Option4'%2C%0D%0A%20%20%7D%2C%0D%0A%5D%0D%0A%0D%0A%3C%2Fscript%3E"},{default:l(()=>[u]),_:1},8,["configs"])]),_:1})),d,h,m,(D(),A(o,null,{default:l(()=>[a(n,{path:"select/basic",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-select%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Please%20Select%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3C%2Fki-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%2C%20watchEffect%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20ref('Option1')%0D%0A%0D%0Aconst%20options%20%3D%20%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option1'%2C%0D%0A%20%20%20%20label%3A%20'Option1'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option2'%2C%0D%0A%20%20%20%20label%3A%20'Option2'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option3'%2C%0D%0A%20%20%20%20label%3A%20'Option3'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option4'%2C%0D%0A%20%20%20%20label%3A%20'Option4'%2C%0D%0A%20%20%7D%2C%0D%0A%5D%0D%0A%0D%0A%3C%2Fscript%3E"},{default:l(()=>[_]),_:1})]),_:1})),f,O,(D(),A(o,null,{default:l(()=>[a(n,{path:"select/disabled",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-select%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Is%20disabled%22%0D%0A%20%20%20%20%20%20%20%20disabled%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3C%2Fki-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%2C%20watchEffect%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20ref('')%0D%0A%0D%0Aconst%20options%20%3D%20%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option1'%2C%0D%0A%20%20%20%20label%3A%20'Option1'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option2'%2C%0D%0A%20%20%20%20label%3A%20'Option2'%2C%0D%0A%20%20%7D%2C%0D%0A%5D%0D%0A%0D%0A%3C%2Fscript%3E"},{default:l(()=>[v]),_:1})]),_:1})),b,B,(D(),A(o,null,{default:l(()=>[a(n,{path:"select/maxHeight",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-select%0D%0A%20%20%20%20%20%20%20%20v-model%3D%22value%22%0D%0A%20%20%20%20%20%20%20%20%3Aoptions%3D%22options%22%0D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Please%20Select%22%0D%0A%20%20%20%20%20%20%20%20maxHeight%3D%22200%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%3C%2Fki-select%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%2C%20watchEffect%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20ref('')%0D%0A%0D%0Aconst%20options%20%3D%20%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option1'%2C%0D%0A%20%20%20%20label%3A%20'Option1'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option2'%2C%0D%0A%20%20%20%20label%3A%20'Option2'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option3'%2C%0D%0A%20%20%20%20label%3A%20'Option3'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option4'%2C%0D%0A%20%20%20%20label%3A%20'Option4'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option5'%2C%0D%0A%20%20%20%20label%3A%20'Option5'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option6'%2C%0D%0A%20%20%20%20label%3A%20'Option6'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option7'%2C%0D%0A%20%20%20%20label%3A%20'Option7'%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20value%3A%20'Option8'%2C%0D%0A%20%20%20%20label%3A%20'Option8'%2C%0D%0A%20%20%7D%0D%0A%5D%0D%0A%0D%0A%3C%2Fscript%3E"},{default:l(()=>[E]),_:1})]),_:1}))])}}});export{N as __pageData,w as default};
