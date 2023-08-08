<template>
    <ki-input
        size="small" 
        type="text" 
        placeholder="Hello World!"
        v-model="msg"
    />
    <br />
    <ki-input 
        type="text" 
        placeholder="Hello World!"
        v-model="msg"
    />
    <br />
    <ki-input 
        size="large"
        type="text" 
        placeholder="Hello World!"
        v-model="msg"
    />
</template>

<script setup>
import {ref} from 'vue'

const msg = ref('')
</script>