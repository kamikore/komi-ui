<template>
    <div>
        <ki-button @click="open">Show message</ki-button>
        <ki-button @click="vnode">VNode</ki-button>
    </div>
</template>

<script setup lang="ts">
import {KiMessage} from 'komi-ui'
import {h} from 'vue'

function open() {
    KiMessage('message !')
}

function vnode() {
    KiMessage({
        message: h('div', { innerHTML: 'VNode message !' }),
    })
}
</script>