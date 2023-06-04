<template>
    <div class="vp-panel-wrap">
        <div class="example-wrap">
            <Preview ></Preview>
        </div>
        <div class="props-wrap">
            <template v-for="(value, key) in config.props" :key="key" >
                <div>
                    
                </div>
            </template>
        </div>    
        <div class="sourceCode-wrap">
            <Editor ref="editorRef" ></Editor>
        </div>
        <!-- lang="x" pre-processors for <template> or <style> are currently not supported. -->
        <!-- <Message></Message> -->
    </div>
</template>

<script setup lang="ts">
import {
    ref, 
    onMounted,
    provide,
} from 'vue'
import Preview from './panel/vp-preview.vue'
import Editor from './panel/vp-editor.vue'
import fs from 'vite-plugin-fs/browser';
import {ReplStore,Store } from './panel/store'


const props = defineProps({
    config: {
        type: Object,
        require: true,
        default: {}
    },
})


const propsComp = (prop) => {
    switch(prop) {
        case Boolean: 
            return 'checkbox'
        case 'Enum': 
            return ''
    }
}


const editorRef = ref()
const [dir ,file] = props.config?.example.split('/')

const source = await fs.readFile(`../examples/${dir}/${file}.vue`)

const store: Store  = new ReplStore({initCode:source})
    
// 共享store
provide('store', store)

onMounted(() => {
    console.log('editorRef:',editorRef.value)
 
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