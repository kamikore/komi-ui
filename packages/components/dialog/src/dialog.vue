<template>
    <Teleport to="body">
        <div :class="[ns.b()]">
            
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import {useNamespace} from '@komi-ui/hooks'

defineOptions({
    name: 'KiDialog'
})

const ns = useNamespace('dialog')

</script>
