<template>
    <li
        :class="[
            ns.b('item'),
            ns.is('selected', selected)
        ]"
        @click="handleClick"
    >
        <slot/>
    </li>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {menuItemProps} from './menu-item'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiMenuItem'
})

const ns = useNamespace('menu')
const emit = defineEmits(['click'])

const props = defineProps(menuItemProps)


function handleClick() {
    emit && emit('click')
}


</script>