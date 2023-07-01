import type { Component, PropType } from 'vue'
import {COMPONENTSIZES, definePropType, buildProps} from '@komi-ui/utils'


export const buttonProps = buildProps({
    tag: {
        type: definePropType<string | Component>([
            String,
            Object,
            Function,
        ]),     
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
    icon: definePropType<string | Component>([
        String,
        Object,
        Function,
    ]),
    round: Boolean,
    circle: Boolean,            
    loading: Boolean,
    color: String,
    dark: Boolean,
    disabled: Boolean,      
    autofocus: Boolean,
})