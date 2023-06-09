<template>
    <ki-radio-group v-model="option">
        <ki-radio label="option1">选项1</ki-radio>
        <ki-radio label="option2">选项2</ki-radio>
        <ki-radio label="option3">选项3</ki-radio>
    </ki-radio-group>
</template>

<script setup>
import {ref} from 'vue'

const option = ref('option1')
</script>