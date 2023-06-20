<template>
    <ki-checkbox-group v-model="option">
        <ki-checkbox label="option1" disabled>option1</ki-checkbox>
        <ki-checkbox label="option2" disabled>option2</ki-checkbox>
        <ki-checkbox label="option3" disabled>option3</ki-checkbox>
    </ki-checkbox-group>
    <br />
    <ki-checkbox-group v-model="option">
        <ki-checkbox checkmarkType="toggle" label="option1" disabled>option1</ki-checkbox>
        <ki-checkbox checkmarkType="toggle" label="option2" disabled>option2</ki-checkbox>
        <ki-checkbox checkmarkType="toggle" label="option3" disabled>option3</ki-checkbox>
    </ki-checkbox-group>
</template>

<script setup>
import {ref} from 'vue'

const option = ref(['option1'])
</script>