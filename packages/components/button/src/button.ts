import type { Component, PropType } from 'vue'
import '@komi-ui/theme/dist/index.css'

export const buttonProps = {
    tag: {
        type: [String, Object as PropType<Component>],       // Components 仅作为类型使用，而不是作为值
        default:'button'
    },
    size: {
        type: String,
        value:['large','default','small'],
        default: 'default'
    },
    disabled: Boolean,      // disabled 传入为true
    icon: {
        type: String,
        value:['default','primary'],
        default: 'loading'
    },
    round: Boolean,
    circle: Boolean,            // 为true时，按钮为圆形仅显示icon
    loading: Boolean,
    color: String,
    dark: Boolean
}