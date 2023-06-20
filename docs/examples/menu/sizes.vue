<template>
    <ki-menu :items="items" size="small"></ki-menu>
    <ki-menu :items="items"></ki-menu>
    <ki-menu :items="items" size="large"></ki-menu>
</template>

<script lang="ts" setup>
const items = [
    { label: "Item One" },
    { label: "Item Two" },
    { label: "Item Three" },
    { label: "Item Four" }
]
</script>