<template>
    <ki-input 
        type="textarea" 
        placeholder="Hello World!"
        v-model="textarea" 
        clearable
        autoResize
    />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textarea = ref('')
</script>
