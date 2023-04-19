<template>
   <component :is="tag" class="ki-button">
    <!-- 按钮icon -->

    <!-- 按钮文本，如果传入了内容，插槽默认为default -->
    <span v-if="$slots.default">     
        <slot/>
    </span>
   </component>
</template>

<script setup>
import { defineProps} from 'vue'
import {buttonProps} from './button'

defineOptions({
    name: 'KiButton'
})

const props = defineProps(buttonProps)

console.log(props);


</script>

<style lang="scss" scoped>

</style>