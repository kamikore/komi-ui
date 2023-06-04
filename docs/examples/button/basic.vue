<template>
    <ki-button type="default">{{ message }}</ki-button>
    <h3>test</h3>
    <p>message</p>
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