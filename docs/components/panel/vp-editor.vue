<template>
    <div class="editor-wrap">
        <textarea 
            class="editor-textarea" 
            :value ="store.state.mainFile.code"
            wrap="hard"
            @input="onInput"
        ></textarea>
        <pre v-html="hlCode"></pre>
    </div>
    <Message v-show="store.state.errors.length" :err="store.state.errors[0]"></Message>

</template>

<script setup lang="ts">
import Message from './vp-message.vue'
import {ref, computed, inject, onMounted} from 'vue'
import { highlight, debounce } from '../../.vitepress/utils'
import type { Store } from './store'


const props = defineProps({
    source: {
        type: String,
        default: ''
    }
})

// 注入store
const store = inject('store') as Store

// 修改code的同时，修改hlCode，撑大容器
const onInput = debounce((e: any) => {
    store.state.mainFile.code = e.target.value
}, 50) 

const hlCode = computed(() => highlight(store.state.mainFile.code, 'vue')) 


// 处理iframe消息
window.addEventListener('message', handle_repl_message)

function handle_repl_message(e: any) {
    // 编译code是否报错 
    // if (e.source !== this.iframe.contentWindow) return

}


</script>

<style lang="scss" scoped>
.editor-wrap {
    position: relative;
    font-size: 14px;
    text-align: left;
    color: #333333;
    font-family: var(--vp-font-family-mono);
    padding: 12px;
    background-color: #eeeeee;
    border-radius: 12px;

    textarea {
        position: absolute;
        top: 0;
        left: 0;
        resize: none;
        height: 100%;
        width: 100%;
        overflow: hidden;
        color: inherit;
        font-size: inherit;
        text-align: inherit;
        font-family: inherit;
        -webkit-text-fill-color: transparent;
        background: none;
        cursor: text;
        padding: inherit;

        // 无法将整个单词放置时换行
        overflow-wrap: break-word;
    }

    pre {
        height: 100%;
        width: 100%;
        font-size: inherit;
        text-align: inherit;
        font-family: inherit;
        margin: 0;
        padding: 0;

        overflow-wrap: break-word;

        // 允许<pre>中换行
        word-wrap: break-word;      /* IE 5.5-7 */
        white-space: pre-wrap;      /* current browsers */
    }
}
</style>