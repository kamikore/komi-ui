import{r as p}from"./chunks/radio.d469a95d.js";import{D as n,o as a,c as D,A as t,B as e,a2 as r,z as o,a as i,O as c,G as d,b as C}from"./chunks/framework.fad14ccc.js";import"./chunks/constants.0c9a1fd0.js";const _=o("h1",{id:"radio-单选按钮",tabindex:"-1"},[i("Radio 单选按钮 "),o("a",{class:"header-anchor",href:"#radio-单选按钮","aria-label":'Permalink to "Radio 单选按钮"'},"​")],-1),u=o("p",null,"radio/panel-example",-1),A=c("",2),E=o("p",null,"radio/basic",-1),m=o("h3",{id:"尺寸",tabindex:"-1"},[i("尺寸 "),o("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1),k=o("p",null,[i("使用 "),o("code",null,"size"),i(" 属性改变输入框大小。 除了default默认大小外，还有另外两个选项：small, large。")],-1),h=o("p",null,"radio/sizes",-1),f=o("h3",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),b=o("p",null,[i("使用 "),o("code",null,"disabled"),i(" 属性来控制单选按钮是否为禁用状态。该属性接受一个 "),o("code",null,"Boolean"),i(" 类型的值")],-1),F=o("p",null,"radio/disabled",-1),R=JSON.parse('{"title":"Radio 单选按钮","description":"","frontmatter":{"title":"Radio 单选按钮","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/components/radio.md","filePath":"zh-CN/components/radio.md"}'),g={name:"zh-CN/components/radio.md"},S=Object.assign(g,{setup(v){return(B,N)=>{const s=n("Panel"),l=n("Demo");return a(),D("div",null,[_,(a(),t(r,null,{default:e(()=>[d(s,{configs:C(p),source:"%3Ctemplate%3E%0D%0A%20%20%3Cki-radio%20v-model%3D%22value%22%3Eradio%3C%2Fki-radio%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7Bref%2C%20watchEffect%7D%20from%20'vue'%0D%0A%0D%0Aconst%20value%20%3D%20ref('')%0D%0A%3C%2Fscript%3E"},{default:e(()=>[u]),_:1},8,["configs"])]),_:1})),A,(a(),t(r,null,{default:e(()=>[d(l,{path:"radio/basic",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-radio-group%20v-model%3D%22option%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option1%22%3Eoption1%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option2%22%3Eoption2%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option3%22%3Eoption3%3C%2Fki-radio%3E%0D%0A%20%20%20%20%3C%2Fki-radio-group%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7Bref%7D%20from%20'vue'%0D%0A%0D%0Aconst%20option%20%3D%20ref('option1')%0D%0A%3C%2Fscript%3E"},{default:e(()=>[E]),_:1})]),_:1})),m,k,(a(),t(r,null,{default:e(()=>[d(l,{path:"radio/sizes",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-radio-group%20v-model%3D%22option%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20size%3D%22small%22%20label%3D%22option1%22%3Eoption1%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option2%22%3Eoption2%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20size%3D%22large%22%20label%3D%22option3%22%3Eoption3%3C%2Fki-radio%3E%0D%0A%20%20%20%20%3C%2Fki-radio-group%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7Bref%7D%20from%20'vue'%0D%0A%0D%0Aconst%20option%20%3D%20ref('option1')%0D%0A%3C%2Fscript%3E"},{default:e(()=>[h]),_:1})]),_:1})),f,b,(a(),t(r,null,{default:e(()=>[d(l,{path:"radio/disabled",source:"%3Ctemplate%3E%0D%0A%20%20%20%20%3Cki-radio-group%20v-model%3D%22option%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option1%22%20disabled%3Eoption1%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option2%22%20disabled%3Eoption2%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option3%22%20disabled%3Eoption3%3C%2Fki-radio%3E%0D%0A%20%20%20%20%3C%2Fki-radio-group%3E%0D%0A%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%3Cki-radio-group%20v-model%3D%22option%22%20disabled%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option1%22%3Eoption1%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option2%22%3Eoption2%3C%2Fki-radio%3E%0D%0A%20%20%20%20%20%20%20%20%3Cki-radio%20label%3D%22option3%22%3Eoption3%3C%2Fki-radio%3E%0D%0A%20%20%20%20%3C%2Fki-radio-group%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%3E%0D%0Aimport%20%7Bref%7D%20from%20'vue'%0D%0A%0D%0Aconst%20option%20%3D%20ref('option1')%0D%0A%3C%2Fscript%3E"},{default:e(()=>[F]),_:1})]),_:1}))])}}});export{R as __pageData,S as default};
