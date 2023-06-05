<template>
    <div class="vp-editor-extend_wrap">
        <ki-button @click="onCopy">Copy</ki-button>
        <ki-button @click="onReset">Reset</ki-button>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import type { Store } from './store'

const props = defineProps({
    initCode: {
        type: String,
        require: true,
    }
})

const store = inject('store') as Store
// 剪贴板对象
const clipboardObj = navigator.clipboard

function onCopy() {
    window.alert('已复制')
    clipboardObj.writeText(store.state.mainFile.code);
}

function onReset() {

}


</script>

<style lang="scss" scoped>
.vp-editor-extend_wrap {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
}

</style>