<template>
    <div>
        <ki-button type="default" loading>Default</ki-button>
        <ki-button type="primary" loading>Primary</ki-button>
    </div>
    <br/>
    <div>
        <ki-button type="default" :icon="RefreshRight" loading>Default</ki-button>
        <ki-button type="primary" :icon="RefreshRight" loading>Primary</ki-button>
    </div>
</template>

<script lang="ts" setup>
import { RefreshRight } from '@element-plus/icons-vue'

</script>