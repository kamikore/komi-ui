<template>
  <Transition
    :name="ns.b('fade')"
    @before-leave="$emit('click')"
    @after-leave="$emit('destroy')"
  >
      <div 
          v-show="visible"
          ref="messageRef"
          :class="ns.b()"
          :style="customStyle"
      >
          <!-- message没有使用VNode或是function，不会有children -->
          <slot>
              <p v-if="isString(message)" :class="ns.e('content')">
                  {{ message }}
              </p>
              <p v-else :class="ns.e('content')" v-html="message"></p>
          </slot>
          <ki-icon><CircleCloseFilled/></ki-icon>
      </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import { useNamespace } from '@komi-ui/hooks'
import {messageProps} from './message'
import {getOffsetOrGap, getLastOffset} from './instance'
import {isString} from '@komi-ui/utils'
import {CircleCloseFilled} from '@element-plus/icons-vue'
import type { CSSProperties } from 'vue'


defineOptions({
    name: 'KiMessage'
})

const ns = useNamespace('message')
const props = defineProps(messageProps)
const emit = defineEmits(['close','destroy'])

const messageRef = ref<HTMLElement>()
const visible = ref(false)
const height = ref(0)

const lastOffset = computed(() => getLastOffset(props.id))
const offset = computed(() => 
    getOffsetOrGap(props.id, props.offset) + lastOffset.value
)

const bottom = computed((): number => 
    height.value + offset.value
)


const customStyle = computed<CSSProperties>(() => ({
  top: `${offset.value}px`,
}))


function close() {
    visible.value = false
}


onMounted(() => {
    visible.value = true
    height.value = messageRef.value!.getBoundingClientRect().height

})

defineExpose({
  visible,
  bottom,
  close,
})

</script>