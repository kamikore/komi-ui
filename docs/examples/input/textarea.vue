<template>
    <ki-input 
        type="textarea" 
        placeholder="Hello World!"
        v-model="textarea" 
        :rows="3"
    />
    <br/>
    <ki-input 
        type="textarea" 
        placeholder="Hello World!"
        v-model="textarea" 
        clearable
    />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const textarea = ref('')
</script>
