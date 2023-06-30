<template>
    <ki-menu 
        :items="items"
        :maxHeight="200"
    ></ki-menu>
</template>

<script lang="ts" setup>
const items = [
    { label: "Item One" , value: "Item One"},
    { label: "Item Two" , value: "Item Two"},
    { label: "Item Three" , value: "Item Three"},
    { label: "Item Four", value: "Item Four"},
    { label: "Item Five", value: "Item Five" },
    { label: "Item Six", value: "Item Six" },
    { label: "Item Seven",value: "Item Seven" },
    { label: "Item Eight",value: "Item Eight" },
    { label: "Item Nine" , value: "Item Nine"},
    { label: "Item Ten" , value: "Item Ten"},
]
</script>