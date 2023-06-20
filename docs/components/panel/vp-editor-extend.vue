<template>
    <div class="vp-editor-extend_wrap">
        <ki-button @click="onCopy" type="primary">
            <i class="iconfont icon-copy"></i>
            <span>Copy</span>
        </ki-button>
        <ki-button @click="onReset" type="primary">
            <i class="iconfont icon-icon-resetting"></i>
            <span>Reset</span>
        </ki-button>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import { Store, defaultMainFile } from './store'

const props = defineProps({
    initCode: {
        type: String,
        require: true,
    },
    initProps: {
        type: Object,
        require: true,
    }
})

const store = inject('store') as Store
// 剪贴板对象
const clipboardObj = navigator.clipboard

// 初始化 props
let compProps = {}
for(let key in props.initProps) {
    compProps[key] = props.initProps[key].value
}

function onCopy() {
    window.alert('已复制')
    clipboardObj.writeText(store.state.mainFile.code)
}

function onReset() {
    Object.assign(store.state.compProps[defaultMainFile],compProps)
    store.state.mainFile.code = props.initCode
    window.alert('已重置')
}


</script>

<style lang="scss" scoped>
.vp-editor-extend_wrap {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;

    i {
        margin-right: 2px;
    }
}

</style>