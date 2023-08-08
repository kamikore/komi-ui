<template>
    <ki-input 
        type="text" 
        placeholder="Hello World!"
        v-model="msg"
        clearable
    />
</template>

<script setup>
import {ref} from 'vue'

const msg = ref('')
</script>