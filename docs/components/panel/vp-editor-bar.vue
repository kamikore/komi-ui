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
import KiMessage from '@komi-ui/components/message'

defineOptions({
    name: 'VPEditorBar'
})


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
const clipboardObj = navigator && navigator.clipboard

// 初始化 props
let compProps:Record<string,any> = {}
for(let key in props.initProps) {
    compProps[key] = props.initProps[key]?.default
}

function onCopy() {
    clipboardObj && clipboardObj.writeText(store.state.mainFile.code)
    KiMessage('Copied!')
}

function onReset() {
    Object.assign(store.state.compProps[defaultMainFile],compProps)
    store.state.mainFile.code = props.initCode
    KiMessage('Reset!')
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