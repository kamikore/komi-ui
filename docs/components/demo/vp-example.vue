<template>
    <div class="example-showcase">
        <ClientOnly>
            <component :is="demo" v-if="demo" v-bind="$attrs" />
        </ClientOnly>
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