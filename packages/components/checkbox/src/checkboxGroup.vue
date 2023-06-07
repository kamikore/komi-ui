<template>
    <div :class="ns.b('group')">

    </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@komi-ui/hooks';

defineOptions({
    name: 'KiCheckboxGroup'
})

const ns = useNamespace('check')



</script>