import {COMPONENTSIZES, definePropType, buildProps, iconPropType} from '@komi-ui/utils'
import { Loading } from '@element-plus/icons-vue'

import type { Component, PropType } from 'vue'

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
    icon: iconPropType,
    round: Boolean,
    circle: Boolean,            
    loading: Boolean,
    /**
    * @description customize loading icon component
    */
    loadingIcon: {
        type: iconPropType,
        default: () => Loading,
    },
    color: String,
    dark: Boolean,
    disabled: Boolean,      
    autofocus: Boolean,
})