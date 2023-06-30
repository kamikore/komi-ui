<template>
    <Transition
        :name="`${ns.namespace}-fade`"
        @before-leave="$emit('close')"
        @after-leave="$emit('destroy')"
    >
        <div 
            v-show="visible"
            ref="messageRef"
            :id="id"
            :class="ns.b()"
            :style="customStyle"
        >
            <ki-icon :class="ns.e('icon')">
                <component :is="icon || InfoFilled"></component>
            </ki-icon>
            <!-- message没有使用VNode或是function，不会有children -->
            <slot>
                <p v-if="isString(message)" :class="ns.e('content')">
                    {{ message }}
                </p>
                <p v-else :class="ns.e('content')" v-html="message"></p>
            </slot>
            <ki-icon 
                :class="ns.e('icon-close')"
                v-if="closable" 
                @click="close"
            >
                <CircleCloseFilled/>
            </ki-icon>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import {ref, computed, onMounted, onUnmounted} from 'vue'
import { useNamespace, useTimeoutFn } from '@komi-ui/hooks'
import {messageProps} from './message'
import {getOffsetOrGap, getLastOffset} from './instance'
import KiIcon from '@komi-ui/components/icon'
import {InfoFilled ,CircleCloseFilled} from '@element-plus/icons-vue'
import {isString} from '@komi-ui/utils'
import type { CSSProperties } from 'vue'


defineOptions({
    name: 'KiMessage'
})

const ns = useNamespace('message')
const props = defineProps(messageProps)
const emit = defineEmits(['close','destroy'])

console.log('props',props)

const messageRef = ref<Element>()
const visible = ref(false)
const height = ref(0)

const lastOffset = computed(() => getLastOffset(props.id))
const offset = computed(() => {
    return getOffsetOrGap(props.id, props.offset) + lastOffset.value
})

const bottom = computed((): number => {
    console.log(height.value , offset.value)
    return height.value + offset.value
})

const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
}))

const {start, stop}  = useTimeoutFn(
    () => {
        close()
    }, 
    props.duration,{immediate: false}
)


function startTimer() {
    // duration 为0，不会消失
    if(props.duration === 0) return
    start()
}

function stopTimer() {
    stop()
}


function close() {
    visible.value = false
}


onMounted(() => {
    visible.value = true
    console.log(messageRef.value!.getBoundingClientRect())
    height.value = messageRef.value!.getBoundingClientRect().height
    startTimer()
})

onUnmounted(() => {
    stopTimer()
})

defineExpose({
  visible,
  bottom,
  close,
})

</script>