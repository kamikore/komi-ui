<template>
  <div class="example">
      <Example :demo="demo" />

      <Transition name="fade">
          <SourceCode v-show="sourceVisible" :source="source" />
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
import {highlight} from '../utils'

const props = defineProps({
  path: {
    type: String,
    require: true
  }
})

const [dir ,file] = props.path?.split('/')
const demo = ref()
const source = ref()
const sourceVisible = ref(true)


import(`../../examples/${dir}/${file}.vue`)
  .then((sfc) => {
    demo.value =  sfc.default
  })

fs.readFile(`../../examples/${dir}/${file}.vue`)
  .then((file) => {
    source.value = encodeURIComponent(highlight(file, 'vue'))
  })



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

