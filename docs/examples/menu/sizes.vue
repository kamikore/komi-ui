<template>
    <ki-menu :items="items" size="small"></ki-menu>
    <br/>
    <ki-menu :items="items"></ki-menu>
    <br/>
    <ki-menu :items="items" size="large"></ki-menu>
</template>

<script lang="ts" setup>
const items = [
{ label: "Item One" , value: "Item One"},
    { label: "Item Two" , value: "Item Two"},
    { label: "Item Three" , value: "Item Three"},
    { label: "Item Four", value: "Item Four"}
]
</script>