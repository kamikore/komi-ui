import type { Component, PropType } from 'vue'
import {COMPONENTSIZES, buildProps} from '@komi-ui/utils'


export const buttonProps = buildProps({
    tag: {
        type: [String, Object as PropType<Component>],       // Components 仅作为类型使用，而不是作为值
        default:'button'
    },
    size: {
        type: String,
        values: COMPONENTSIZES,
        default: 'default'
    },
    type: {
        type: String,
        values: ['default','primary',''],
        default: 'default'
    },
    icon: {
        type: [String, Object as PropType<Component>],
        default: 'loading'
    },
    round: Boolean,
    circle: Boolean,            
    loading: Boolean,
    color: String,
    dark: Boolean,
    disabled: Boolean,      
    autofocus: Boolean,
})