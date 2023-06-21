<template>
    <div :class="ns.b()">
        <component 
            :is="tag" 
            :class="ns.e('wrap')"
            :style="scrollbarStyle"
        >
            <slot/>
        </component>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import type { CSSProperties } from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import { scrollbarProps } from './scrollbar';
import { addUnit } from "@komi-ui/utils"

defineOptions({
    name: 'KiScrollbar'
})

const ns = useNamespace('scrollbar')

const props = defineProps(scrollbarProps)


const scrollbarStyle = ref({
    height: addUnit(props.height)
} as CSSProperties)


</script>
