<template>
    <ki-input 
        type="text" 
        placeholder="Hello World!"
        v-model="msg"
        disabled
    />
</template>

<script setup>
import {ref} from 'vue'

const msg = ref('')
</script>