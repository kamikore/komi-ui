<template>
    <ul 
        :class="[
            ns.b(),
            ns.m(size),
        ]"
        :style="{maxHeight: addUnit(maxHeight)}"
    >
        <li 
            v-if="!isArray(items) || items.length === 0" 
            :class="ns.e('noResult')"
        >
            No results
        </li>
        <template v-else v-for="(item,index) in items" :key="index">
            <ki-menu-item 
                :selected="selectedIndex? selectedIndex === index : undefined"
                @click="itemSelect($event,item.value,index)" 
            >{{ item.label || item.value || '' }}</ki-menu-item>
        </template>

    </ul>
</template>

<script lang="ts" setup>
import {menuProps, MENUITEM} from './menu'
import {useNamespace} from '@komi-ui/hooks'
import { addUnit, isArray } from '@komi-ui/utils'
import {KiMenuItem} from '@komi-ui/components/menu'
import {computed} from 'vue'

defineOptions({
    name: 'KiMenu'
})

const ns = useNamespace('menu')

const props = defineProps(menuProps)

const selectedIndex = computed(() => {
    if(!isArray(props.items)) return -1
    props.items.findIndex((item: MENUITEM) => 
        props.value === item.value
    )
})

function itemSelect(
    ev: MouseEvent, 
    value: MENUITEM['value'], 
    index: Number
) {
    props.onItemSelect && props.onItemSelect(ev, value, index)
}

defineExpose({
    selectedIndex
})

</script>