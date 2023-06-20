<template>
    <ki-checkbox v-model="option" label="check">check</ki-checkbox>
</template>

<script setup>
import {ref} from 'vue'

const option = ref(false)
</script>