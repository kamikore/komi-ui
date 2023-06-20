<template>
    <div class="vp-panel_wrap">
        <div class="example_wrap">
            <Preview></Preview>
        </div>
        <hr color="#e2e2e2" size="4px"/>
        <!-- 选项排序顺序根据传入config -->
        <div class="props-wrap">
            <Props :name="configs.name" :configs="configs.props"></Props>
        </div>    
        <div class="sourceCode_wrap">
            <EditorExtend 
                :initCode="decodeURIComponent(source)"
                :initProps="configs.props"
            ></EditorExtend>
            <Editor></Editor>
        </div>
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import Preview from './panel/vp-preview.vue'
import Props from './panel/vp-props.vue'
import Editor from './panel/vp-editor.vue'
import EditorExtend from './panel/vp-editor-extend.vue'

// const fs = require('browserify-fs');
import {ReplStore,Store } from './panel/store'

const props = defineProps({
    configs: {
        type: Object,
        require: true,
        default: {}
    },
    source: {
        type: String,
        require: true,
    }
})

const store: Store  = new ReplStore({initCode: decodeURIComponent(props.source)})
    
// 共享store
provide('store', store)

</script>


<style scoped lang="scss">
.vp-panel_wrap {
    border: #e2e2e2 2px solid;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    margin: 12px 0;
    
    hr {
        margin: 0;
        size: 4px;
        color: #e2e2e2;
    }

    .example_wrap {
    }

    .sourceCode_wrap {
        padding: 12px;
    }
}

</style>