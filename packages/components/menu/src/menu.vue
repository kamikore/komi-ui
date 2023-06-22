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
                :selected="tabIndex? tabIndex === index : undefined"
                @click="onItemSelect($event,item.label,index)" 
            >{{ item.label }}</ki-menu-item>
        </template>
    </ul>
</template>

<script lang="ts" setup>
import KiMenuItem from './menu-item.vue'
import {ref} from 'vue'
import {menuProps} from './menu'
import {useNamespace} from '@komi-ui/hooks'
import { addUnit } from '@komi-ui/utils'

defineOptions({
    name: 'KiMenu'
})

const ns = useNamespace('menu')

const props = defineProps(menuProps)


function onItemSelect(
    ev: MouseEvent, 
    label: String, 
    index: Number
) {

    props.tabIndex ? props.tabIndex = index:''
    props.onItemSelect && props.onItemSelect(label,index)
}

</script>