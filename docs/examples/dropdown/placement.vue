<template>
    <ki-dropdown placement="bottom-start">
        <ki-button>bottom-start</ki-button>
        <template #dropdown>
            <ki-menu :items="items"></ki-menu>
        </template>
    </ki-dropdown>
    <ki-dropdown>
        <ki-button>bottom</ki-button>
        <template #dropdown>
            <ki-menu :items="items"></ki-menu>
        </template>
    </ki-dropdown>
    <ki-dropdown placement="bottom-end">
        <ki-button>bottom-end</ki-button>
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