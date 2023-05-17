<template>
    <div :class="[ns.b()]">
        <ki-popover 
            :showArrow="showArrow"
            :trigger="trigger"
            :placement="placement"
        >
            <template #default>
                <slot/>
            </template>
            <template #content>
                <slot name="dropdown">
                    <!-- 默认内容 -->
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </slot>
            </template>
        </ki-popover>
    </div>
</template>

<script lang="ts" setup>
import {ref, defineProps,useSlots} from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import {dropdownProps} from './dropdown'
import KiPopover from '@komi-ui/components/popover'

defineOptions({
    name: 'KiDropdown'
})

const props = defineProps(dropdownProps)
const ns = useNamespace('dropdown')
const isShow = ref(false)

const slots = useSlots()


</script>
