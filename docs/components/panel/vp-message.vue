<template>
    <div class="vp-message_wrap" v-show="store.state.errors.length">
        <ki-icon 
            class="closeIcon" 
            :size="20" 
            color="#fff"
            @click="handleClose"
        >
            <CircleCloseFilled/>
        </ki-icon>
        <pre> {{formatMessage(store.state.errors[0])}} </pre>
    </div>
</template>

<script lang="ts" setup>
import {CircleCloseFilled} from '@element-plus/icons-vue'
import { inject } from 'vue'
import type { CompilerError } from 'vue/compiler-sfc'
import type { Store } from './store'

defineOptions({
    name: 'VPMessage'
})

// 注入store
const store = inject('store') as Store

function formatMessage(err: string | CompilerError) {
    if(!err) return
    if (typeof err === 'string') {
        return err
    } else {
        // CompilerError
        let msg = err .message
        const loc = err.loc
        if (loc && loc.start) {
        msg = `(${loc.start.line}:${loc.start.column}) ` + msg
        }
        return msg
    }
}

function handleClose() {
    store.state.errors.length = 0
}

</script>

<style lang="scss" scoped>
    .vp-message_wrap {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        border-radius: 6px;
        white-space: pre;
        font-size: 12px;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        color: #fff;
        background-color: #892c21;
        overflow-x: scroll;
        padding: 16px;
        margin: 12px 0;

        .closeIcon {
            position: sticky;
            top: 0;
            left: 95%;
            cursor: pointer;
        }

        pre {
            margin: 0;
        }

    }
</style>