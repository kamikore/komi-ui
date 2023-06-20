<template>
    <ki-checkbox-group v-model="option">
        <ki-checkbox size="small" label="option1">option1</ki-checkbox>
        <ki-checkbox label="option2">option2</ki-checkbox>
        <ki-checkbox size="large" label="option3">option3</ki-checkbox>
    </ki-checkbox-group>
    <br />
    <ki-checkbox-group v-model="option">
        <ki-checkbox checkmarkType="toggle" size="small" label="option1">option1</ki-checkbox>
        <ki-checkbox checkmarkType="toggle" label="option2">option2</ki-checkbox>
        <ki-checkbox checkmarkType="toggle" size="large" label="option3">option3</ki-checkbox>
    </ki-checkbox-group>
</template>

<script setup>
import {ref} from 'vue'

const option = ref(['option1'])
</script>