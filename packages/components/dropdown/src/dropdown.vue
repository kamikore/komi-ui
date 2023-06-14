<template>
    <div :class="[ns.b()]">
        <ki-popover 
            :showArrow="showArrow"
            :trigger="trigger"
            :placement="placement"
            style="padding: 0;"
        >
            <!-- 渲染第一个元素 -->
            <ki-only-child>
                <slot/>
            </ki-only-child>
            <template #content>
                <ki-scrollbar :height="maxHeight">
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
import KiPopover from '@komi-ui/components/popover'
import KiScrollbar from '@komi-ui/components/scrollbar'

defineOptions({
    name: 'KiDropdown'
})

const props = defineProps(dropdownProps)
const ns = useNamespace('dropdown')
const isShow = ref(false)

const slots = useSlots()


</script>
