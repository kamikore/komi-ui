<template>
    <div :class="[ns.b()]">
        <ki-popover>
            <template #default>
                <slot/>
            </template>
            <template #content>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <slot name="dropdown" />
            </template>
        </ki-popover>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import {dropdownProps} from './dropdown'
import KiPopover from '@komi-ui/components/popover'

defineOptions({
    name: 'KiDropdown'
})

const props = defineProps(dropdownProps)
const ns = useNamespace('dropdown')
const isShow = ref(false)




console.log("dropdown props:",props);

</script>
