<template>
    <ki-input type="text">{{ message }}</ki-input>
</template>

<script setup>
import {ref} from 'vue'

const message = ref('Hello')
</script>