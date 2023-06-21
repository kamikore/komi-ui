<template>
    <div :class="[ns.b()]">
        <ki-popover 
            :showArrow="showArrow"
            :trigger="trigger"
            :placement="placement"
            :style="{padding: 0}"
            transition="zoom-in-top"
        >
            <!-- 渲染第一个元素 -->
            <slot/>
            <template #content>
                <ki-scrollbar :height="addUnit(maxHeight)">
                    <slot name="dropdown"/>
                </ki-scrollbar>
            </template>
        </ki-popover>
    </div>
</template>

<script lang="ts" setup>
import {ref,useSlots} from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import {dropdownProps} from './dropdown'
import { addUnit } from '@komi-ui/utils'

defineOptions({
    name: 'KiDropdown'
})

const props = defineProps(dropdownProps)
const ns = useNamespace('dropdown')



</script>
