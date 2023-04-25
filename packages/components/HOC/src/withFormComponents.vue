<template>
    <div :class="[ns.b()]">
        <label for=""></label>
        <slot/>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'withFormComponents'
})

const ns = useNamespace('withFormComponents')


</script>

<style lang="scss" scoped>

</style>