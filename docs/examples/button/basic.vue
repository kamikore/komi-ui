<template>
    <ki-button type="default">{{ message }}</ki-button>
</template>

<script setup>
import {ref} from 'vue'

const message = ref('Hello')
</script>

<style scoped>

h3 {
    color: red;
}
</style>