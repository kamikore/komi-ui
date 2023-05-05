<template>
    <div :class="[ns.b()]">
        <slot/>
    </div>
</template>

<script setup lang="ts">
import {ref, defineProps} from 'vue'
import {menuProps} from './menu'
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: "KiMenu"
})

const ns = useNamespace('menu')

</script>