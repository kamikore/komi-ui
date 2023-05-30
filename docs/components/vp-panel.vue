<template>
    <div class="vp-panel-wrap">
        <div class="example-wrap">
            <h3>example</h3>
            <!-- <Compiler :source="editorRef.code"></Compiler> -->
        </div>
        <div class="props-wrap">
            <template v-for="(value, key) in config.props" :key="key" >
                <div>
                    
                </div>
            </template>
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
        require: true,
        default: {}
    }
})

const propsComp = (prop) => {
    switch(prop) {
        case Boolean: 
            return 'checkbox'
        case 'Enum': 
            return ''
    }
}

console.log("v-panel config: ",props.config)

const editorRef = ref(null)
const [dir ,file] = props.config?.example.split('/')


const source = await fs.readFile(`../examples/${dir}/${file}.vue`)

onMounted(() => {
    console.log('editorRef:',editorRef.value.code)
})

</script>


<style scoped lang="scss">
.vp-panel-wrap {
    border: #e2e2e2 2px solid;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    padding: 12px;
}

</style>