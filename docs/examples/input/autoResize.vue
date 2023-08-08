<template>
    <ki-input 
        type="textarea" 
        placeholder="Hello World!"
        v-model="msg" 
        clearable
        autoResize
    />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const msg = ref('')
</script>
