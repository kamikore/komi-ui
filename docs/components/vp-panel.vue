<template>
    <div class="vp-panel_wrap">
        <div class="example_wrap">
            <Preview ></Preview>
        </div>
        <hr color="#e2e2e2" size="4px"/>
        <!-- 选项排序顺序根据传入config -->
        <div class="props-wrap">
            <Props :configs="configs.props"></Props>
        </div>    
        <div class="sourceCode_wrap">
            <EditorExtend :initCode="source"></EditorExtend>
            <Editor ref="editorRef" ></Editor>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    ref, 
    onMounted,
    provide,
    watchEffect
} from 'vue'
import Preview from './panel/vp-preview.vue'
import Props from './panel/vp-props.vue'
import Editor from './panel/vp-editor.vue'
import EditorExtend from './panel/vp-editor-extend.vue'
import fs from 'vite-plugin-fs/browser';
import {ReplStore,Store } from './panel/store'


const props = defineProps({
    configs: {
        type: Object,
        require: true,
        default: {}
    },
})

const test = ref('test') 

watchEffect(() => {
    console.log("group modelValue", test)
})

const editorRef = ref()
const [dir ,file] = props.configs?.example.split('/')

const source = await fs.readFile(`../examples/${dir}/${file}.vue`)


const store: Store  = new ReplStore({initCode: source.trim()})
    
// 共享store
provide('store', store)

onMounted(() => {
 
})


</script>


<style scoped lang="scss">
.vp-panel_wrap {
    border: #e2e2e2 2px solid;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    
    hr {
        margin: 0;
    }

    .example_wrap {
        padding: 24px 16px;
    }

    .sourceCode_wrap {
        padding: 12px;
    }
}

</style>