<template>
    <div class="vp-panel-wrap">
        <div class="example-wrap">
            <!-- <Compiler :source="editorRef.code"></Compiler> -->
        </div>
        <div class="props-wrap">
            
        </div>    
        <div class="sourceCode-wrap">
            <Editor ref="editorRef" :source="encodeURIComponent(source)"></Editor>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import Compiler from './panel/vp-compiler.vue'
import Editor from './panel/vp-editor.vue'
import fs from 'vite-plugin-fs/browser';
import {highlight} from '../.vitepress/utils'


const props = defineProps({
    config: {
        type: Object,
        require: true
    }
})

console.log(props.config)

const editorRef = ref(null)
const [dir ,file] = props.config?.example.split('/')


const source = await fs.readFile(`../examples/${dir}/${file}.vue`)

onMounted(() => {
    console.log(editorRef)
})

</script>


<style scoped lang="scss">
.vp-panel-wrap {
    border: #e2e2e2 2px solid;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;

}

</style>