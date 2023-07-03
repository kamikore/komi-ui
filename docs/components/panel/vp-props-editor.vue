<template>
    <div class="editor-wrap">
        <textarea 
            :class="[
                'editor-textarea',
                !isFocus && !modelValue ? 'showText' : ''
            ]" 
            :value ="modelValue"
            :placeholder="placeholder"
            wrap="hard"
            @input="onInput"
            @focus="isFocus = true"
            @blur="isFocus = false"
        ></textarea>
        <pre v-html="hlCode"></pre>
    </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import { highlight } from '../../.vitepress/utils'
import { debounce } from '@komi-ui/utils'

defineOptions({
    name: 'VPPropsEditor'
})


const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    source: {
        type: String,
        default: ''
    },
    lang: {
        type: String,
        default: 'vue'
    }
})

const emit = defineEmits(['update:modelValue'])

const isFocus = ref(false)

// 修改code的同时，修改hlCode，撑大容器
const onInput = debounce((e: any) => {
    emit && emit('update:modelValue',e.target.value)
}, 50) 

const hlCode = computed(() => highlight(props.modelValue, props.lang)) 


</script>

<style lang="scss" scoped>
.editor-wrap {
    position: relative;
    font-size: 14px;
    text-align: left;
    color: #333333;
    font-family: var(--vp-font-family-mono);
    padding: 8px 12px;
    background-color: #eeeeee;
    border-radius: 12px;
    line-height: 24px;

    textarea {
        &.showText {
            -webkit-text-fill-color: inherit;
        }

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
        line-height: inherit;

        // 无法将整个单词放置时换行
        overflow-wrap: break-word;
    }

    pre {
        min-height: 24px;
        height: 100%;
        width: 100%;
        font-size: inherit;
        text-align: inherit;
        font-family: inherit;
        margin: 0;
        padding: 0;
        line-height: inherit;

        overflow-wrap: break-word;

        // 允许<pre>中换行
        word-wrap: break-word;      /* IE 5.5-7 */
        white-space: pre-wrap;      /* current browsers */
    }
}
</style>