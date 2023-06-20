<template>
    <ki-input 
        type="password" 
        placeholder="input password"
        v-model="password" 
    />
    <br/>
    <ki-input 
        type="password" 
        placeholder="input password"
        v-model="password" 
        showPassword
    />
</template>

<script setup lang="ts">
import {ref} from 'vue'

const password = ref('')
</script>
