<template>
    <div class="editor-wrap">
        <textarea 
            class="editor-textarea" 
            v-model="code"
            wrap="hard"
            ref="test"
        ></textarea>
        <pre 
            v-html="hlCode"
            class="editor-pre"
        ></pre>
    </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import { highlight } from '../../.vitepress/utils'

const props = defineProps({
    source: {
        type: String,
        default: ''
    }
})

const test = ref(null)

onMounted(() => {
    console.log(test)
})

const code = computed(() => decodeURIComponent(props.source))
const hlCode = computed(() => highlight(code.value, 'vue')) 

defineExpose({
    code,
})

</script>

<style lang="scss" scoped>
.editor-wrap {
    position: relative;
    font-size: 14px;
    text-align: left;
    color: #333333;
    font-family: var(--vp-font-family-mono);
    padding: 0 12px;

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
    }

    pre {
        height: 100%;
        width: 100%;
        font-size: inherit;
        text-align: inherit;
        font-family: inherit;
    }
}
</style>