<template>
    <ki-popover
        trigger="click"
        :style="{
            padding: 0,
            boxShadow: 'none',
        }"
        :minWidthOnTrigger="true"
        transition="zoom-in-top"
    >
        <div 
            ref="triggerRef"
            :class="[
                ns.b(),
                ns.is('disabled',disabled)
            ]" 
        >
            <span 
                :class="[
                    ns.e('label'),
                    ns.is('selected', modelValue)
                ]"
            > 
                {{ modelValue || placeholder }}
            </span>
            <ki-icon :class="ns.e('icon')">
                <CircleCloseFilled v-if="modelValue" @click="handleClear"/>
                <CaretBottom />
            </ki-icon>
        </div>
        <template #content>
            <ki-menu
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
import { ref ,onMounted, computed} from 'vue'

defineOptions({
    name: 'KiSelect'
})

const ns = useNamespace('select')
const props = defineProps(selectProps)

const emit = defineEmits(['update:modelValue'])

const triggerRef = ref<HTMLElement>()

const minWidth = computed(() => 
    `${triggerRef.value?.offsetWidth}px`
)


function handleClear() {
    props.modelValue ? props.modelValue = undefined : ''
}

function onItemSelect(ev: MouseEvent, value:OPTION, index: Number) {
    emit && emit('update:modelValue', value)
}


</script>