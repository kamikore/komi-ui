<template>
    <div>
        <ki-button @click="open">Show message</ki-button>
    </div>
</template>

<script setup lang="ts">
import {KiMessage} from 'komi-ui'

function open() {
    KiMessage({
        message: 'message !',
        closable: true
    })
}

</script>