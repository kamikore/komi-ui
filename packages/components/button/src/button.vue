<template>
    <component 
        :is="tag" 
        v-bind="$props"
        :class= "[
            ns.b(),
            ns.m(type),
            ns.is('disabled',disabled),
            ns.is('round',round),
            ns.is('circle',circle),
            ns.is('loading',loading),
            ns.m(size)
        ]"
        @click="handleClick"
    >
        <!-- 前缀icon -->
        <ki-icon 
            v-if="icon || $slots.icon || loading"
            :class="ns.is('loading',loading)"
        >
            <component v-if="icon" :is="icon" />
            <!-- :is="icon?icon:Loading" 不起作用 -->
            <component v-else-if="loading" :is="Loading" />
            <slot v-else name="icon" />   
        </ki-icon>
        
        <!-- 按钮文本，如果传入了内容，插槽默认为default -->
        <span :class="ns.e('text')" v-if="$slots.default">     
            <slot/>
        </span>

    </component>
</template>

<script lang="ts" setup>
import {buttonProps} from './button'
import { useNamespace } from '@komi-ui/hooks'
import KiIcon from '@komi-ui/components/icon'
import { Loading } from '@element-plus/icons-vue'


defineOptions({
    name: 'KiButton'
})

const emit = defineEmits(['click'])

const props = defineProps(buttonProps)
const ns = useNamespace('button')


function handleClick(ev: MouseEvent) {
    emit && emit('click', ev)
}

</script>
