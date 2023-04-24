<template>
    <div :class="[ns.b()]">
        <div :class="[ns.e('label')]" >
            <span>{{ label }}</span>
        </div>
        <div :class="[ns.e('menu')]">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import {dropMenuProps} from './dropMenu'

defineOptions({
    name: 'KiDropMenu'
})

const props = defineProps(dropMenuProps)
const ns = useNamespace('dropMenu')

</script>

<style lang="scss" scoped>

</style>