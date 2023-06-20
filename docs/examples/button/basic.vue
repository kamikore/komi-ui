<template>
    <div>
        <ki-button>Default</ki-button>
        <ki-button type="primary">Primary</ki-button>
    </div>
    <div>
        <ki-button round>Default</ki-button>
        <ki-button type="primary" round>Primary</ki-button>
    </div>
    <div>
        <ki-button :icon="Search" circle />
        <ki-button :icon="Check" circle />
        <ki-button type="primary"  :icon="Edit" circle/>
        <ki-button type="primary"  :icon="Delete" circle/>
    </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Search,
} from '@element-plus/icons-vue'
</script>