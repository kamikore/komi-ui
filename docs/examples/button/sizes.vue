<template>
    <ki-button size="small">Small</ki-button>
    <ki-button>Default</ki-button>
    <ki-button size="large">Large</ki-button>
    <br/>
    <ki-button size="small" round>Small</ki-button>
    <ki-button round>Default</ki-button>
    <ki-button size="large" round>Large</ki-button>
    <br/>
    <ki-button :icon="Edit" size="small" circle/>
    <ki-button :icon="Edit" circle/>
    <ki-button :icon="Edit" size="large" circle/>
</template>

<script lang="ts" setup>
import {Edit} from '@element-plus/icons-vue'
</script>