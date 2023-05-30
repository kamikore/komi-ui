<template>
  <div class="example">
      <Example :demo="demo.default" />

      <Transition name="fade">
          <SourceCode v-show="sourceVisible" :source="encodeURIComponent(hlSource)" />
      </Transition>
  </div>
</template>
  

<script setup lang="ts">
// https://cn.vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility
// import fs from 'node:fs'
import fs from 'vite-plugin-fs/browser';
import { computed, ref } from 'vue'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'
import {highlight} from '../.vitepress/utils'

const props = defineProps({
  example: {
    type: String,
    require: true
  }
})

const [dir ,file] = props.example?.split('/')
// const demo = ref()
// const source = ref()
const sourceVisible = ref(true)

const demo = await import(`../examples/${dir}/${file}.vue`)

const source = await fs.readFile(`../examples/${dir}/${file}.vue`)
const hlSource =  `<pre v-pre><code>${highlight(source, 'vue')}</code></pre>`


</script>


<style scoped lang="scss">
// Transition config
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

