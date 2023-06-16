<template>
    <div :class="[ns.b()]">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {menuProps} from './menu'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiMenu'
})

const ns = useNamespace('menu')

</script>