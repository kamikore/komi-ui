<template>
    <div class="vp-message_wrap">
        <pre> {{formatMessage(err)}} </pre>
    </div>
</template>

<script setup lang="ts">
import type { CompilerError } from 'vue/compiler-sfc'

const props = defineProps<{
  err?: string | CompilerError
}>()

function formatMessage(err) {
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

</script>

<style lang="scss" scoped>
    .vp-message_wrap {
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
    }
</style>