<template>
    <ki-input 
        type="text" 
        placeholder="Hello World!"
        v-model="message"
        clearable
    />
</template>

<script setup>
import {ref} from 'vue'

const message = ref('')
</script>