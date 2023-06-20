<template>
    <ki-input
        size="small" 
        type="text" 
        placeholder="Hello World!"
        v-model="message"
    />
    <br />
    <ki-input 
        type="text" 
        placeholder="Hello World!"
        v-model="message"
    />
    <br />
    <ki-input 
        size="large"
        type="text" 
        placeholder="Hello World!"
        v-model="message"
    />
</template>

<script setup>
import {ref} from 'vue'

const message = ref('')
</script>