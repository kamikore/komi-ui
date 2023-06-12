<template>
    <ki-checkbox-group v-model="option">
        <ki-checkbox label="option1">选项1</ki-checkbox>
        <ki-checkbox label="option2">选项2</ki-checkbox>
        <ki-checkbox label="option3">选项3</ki-checkbox>
    </ki-checkbox-group>
</template>

<script setup>
import {ref} from 'vue'

const option = ref('option1')
</script>