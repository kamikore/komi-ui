<template>
    <ki-checkbox v-model="value" label="check">check</ki-checkbox>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const value = ref(false)
</script>