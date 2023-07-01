<template>
    <ki-dropdown>
        <ki-button>Hover me !</ki-button>
        <template #dropdown>
            <ki-menu :items="items"></ki-menu>
        </template>
    </ki-dropdown>
</template>

<script lang="ts" setup>
const items = [
    { label: "Item One" },
    { label: "Item Two" },
    { label: "Item Three" },
    { label: "Item Four" }
]
</script>