<template>
    <ki-popover
        ref="popoverRef"
        trigger="click"
        :style="{
            padding: 0,
            boxShadow: 'none',
        }"
        :minWidthOnTrigger="true"
        :visible="visible"
        transition="zoom-in-top"
    >
        <div 
            :class="[
                ns.b(),
                ns.is('disabled',disabled),
                ns.is('selected', menuRef?.selectedIndex != -1),
                ns.is('unfold', visible),
            ]" 
            @click="toggle"
        >
            <span 
                :class="[
                    ns.e('label'),
                ]"
            > 
                {{ modelValue || placeholder }}
            </span>
            <span>                      
                <ki-icon 
                    :class="ns.e('icon-close')"
                    :size="16"
                >
                    <CircleCloseFilled v-if="modelValue" @click.stop="handleClear"/>
                </ki-icon>
                <ki-icon 
                    :class="ns.e('icon-arrow')"
                    :size="16"
                >
                    <CaretBottom />
                </ki-icon>
            </span>
        </div>
        <template #content>
            <ki-menu
                ref="menuRef"
                :value="modelValue"
                :items="options"
                :placeholder="placeholder"
                :onItemSelect="onItemSelect"
                :maxHeight="maxHeight"
            >
            </ki-menu>
        </template>
    </ki-popover>
</template>

<script setup lang="ts">
import { useNamespace } from '@komi-ui/hooks'
import {selectProps,OPTION} from './select'
import KiPopover from '@komi-ui/components/popover'
import KiMenu from '@komi-ui/components/menu'
import {CaretBottom, CircleCloseFilled} from '@element-plus/icons-vue'
import { ref} from 'vue'

defineOptions({
    name: 'KiSelect'
})

const emit = defineEmits(['update:modelValue'])

const ns = useNamespace('select')
const props = defineProps(selectProps)

const popoverRef = ref()
const menuRef = ref()

const visible = ref(false)


function toggle() {
    if(props.disabled) return
    visible.value = !visible.value
} 


function handleClear() {
    emit && emit('update:modelValue', undefined)
}

function onItemSelect(ev: MouseEvent, value:OPTION, index: Number) {
    emit && emit('update:modelValue', value)
    visible.value = false
}

</script>