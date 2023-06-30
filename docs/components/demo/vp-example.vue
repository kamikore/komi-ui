<template>
    <div class="example-showcase">
        <component :is="demo" v-if="demo" v-bind="$attrs" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // 组件实例
  demo: {
    type: Object,
    required: true,
  },
})


</script>