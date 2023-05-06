import type { Component, PropType } from 'vue'

export const buttonProps = {
    tag: {
        type: [String, Object as PropType<Component>],       // Components 仅作为类型使用，而不是作为值
        default:'button'
    },
    size: {
        type: String,
        default: 'default'
    },
    type: {
        type: String,
        default: 'default'
    },
    icon: {
        type: String,
        default: 'loading'
    },
    round: Boolean,
    circle: Boolean,            // 为true时，按钮为圆形仅显示icon
    loading: Boolean,
    color: String,
    dark: Boolean,
    // 原生属性
    disabled: Boolean,      // disabled 传入为true
    autofocus: Boolean,
}