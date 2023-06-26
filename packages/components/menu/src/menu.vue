<template>
    <ul 
        :class="[
            ns.b(),
            ns.m(size),
        ]"
        :style="{maxHeight: addUnit(maxHeight)}"
    >
        <template v-for="(item,index) in items" :key="index">
            <ki-menu-item 
                :selected="selectedIndex? selectedIndex === index : undefined"
                @click="onItemSelect($event,item.value,index)" 
            >{{ item.label || item.value || '' }}</ki-menu-item>
        </template>
        <li v-if="!items" :class="ns.e('noResult')">
            No results
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {menuProps, MENUITEM} from './menu'
import {useNamespace} from '@komi-ui/hooks'
import { addUnit } from '@komi-ui/utils'
import {KiMenuItem} from '@komi-ui/components/menu'
import {ref} from 'vue'

defineOptions({
    name: 'KiMenu'
})

const ns = useNamespace('menu')

const props = defineProps(menuProps)

const selectedIndex = ref(
    props.items.findIndex((item: MENUITEM) => 
        props.modelValue === item.value
    )
)


function onItemSelect(
    ev: MouseEvent, 
    value: MENUITEM['value'], 
    index: Number
) {
    props.onItemSelect && props.onItemSelect(ev, value, index)
}

</script>