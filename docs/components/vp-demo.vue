<template>
  <div class="vp-demo-wrap">
      <div class="example-wrap">
        <Example :demo="demo.default" />
      </div>
      <hr color="#e2e2e2" size="4px"/>
      <div class="extendBar-wrap">
        <template 
            v-for="(value, key) in extendOps"
            :key="key"
        >
            <ki-popover>
                <i 
                  :class="['iconfont', value.icon]"
                  @click="extendClick(key)"
                ></i>
                <template #content>{{ value[lang] }}</template>
            </ki-popover>
        </template>
      </div>

        <KiCollapseTransition>
            <div class="sourceCode-wrap" v-show="isExtend">
              <SourceCode :source="encodeURIComponent(hlSource)" />
            </div>
        </KiCollapseTransition>
      
        <div 
            class="sourceCode-float-control" 
            v-show="isExtend"
            @click="isExtend = false"
        >
            <i class="iconfont icon-arrow-up"></i>
            <span>{{ lang === 'zh-CN'?'隐藏代码':'Hide source' }}</span>
        </div>
    
  </div>
</template>
  

<script setup lang="ts">
// https://cn.vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
// import fs from 'node:fs'
import { ref } from 'vue'
import { useData } from 'vitepress'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import {highlight} from '../.vitepress/utils'
import {KiMessage} from 'komi-ui'

defineOptions({
  name: 'VPDemo'
})

const props = defineProps<{
  path: string,
  source: string
}>()

const { lang } = useData()

const [dir ,file] = props.path?.split('/')

const demo = await import(`../examples/${dir}/${file}.vue`)
const hlSource =  `<code>${highlight(decodeURIComponent(props.source), 'vue')}</code>`

const extendOps = {
  Github: {
    'zh-CN': 'Github',
    'en-US': 'Github',
    icon: 'icon-github1'
  },
  Copy: {
    'zh-CN': '复制代码',
    'en-US': 'Copy code',
    icon: 'icon-copy'
  },
  Source: {
    'zh-CN': '查看代码',
    'en-US': 'View source',
    icon: 'icon-code'
  },
}

const clipboardObj = navigator.clipboard
const isExtend = ref(false)


function extendClick(op: String) {
  switch(op) {
    case 'Source':
      isExtend.value = !isExtend.value
      break
    case 'Copy':
      clipboardObj && clipboardObj.writeText(props.source)
      KiMessage('Copied')
      break
    case 'Github':
      break
  }
}

</script>


<style scoped lang="scss">
.vp-demo-wrap {
  position: relative;
  border: #e2e2e2 2px solid;
  border-radius: 12px;
  margin-top: 12px;


  .example-wrap {
    padding: 24px;
  }

  hr {
    margin: 0;
  }

  .extendBar-wrap {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 2.5rem;
      font-size: 16px;

      i {
          cursor: pointer;
          margin: 0 0.5rem;
          color: var(--text-color-lighter);
          transition: .2s;
          color: #c5c5c5;
          
          &:hover {
            color:#484852
          }
      }

  }
  .sourceCode-wrap {
    padding: 12px;
  }

  .sourceCode-float-control {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    z-index: 1;
    color: #9b9b9b;
    background-color: #fff;
    cursor: pointer;
    border-radius: 0 0 12px 12px;

    &:hover {
      color: #484852;
      background-color: #f8f8f8;
    }

    border-top: 2px solid #e2e2e2;

    i {
      font-size: 16px;
    }

  }
}

</style>

