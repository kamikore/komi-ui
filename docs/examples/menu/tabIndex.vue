<template>
    <ki-menu 
        :items="items"
        :tabindex="tabIndex"
    ></ki-menu>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const tabIndex = ref(1)
const items = [
    { label: "Item One" },
    { label: "Item Two" },
    { label: "Item Three" },
    { label: "Item Four" }
]
</script>