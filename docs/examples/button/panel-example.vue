<template>
    <ki-button> 
        {{ msg }}
    </ki-button>
</template>

<script lang="ts" setup>
    import {ref} from 'vue'
    const msg = ref('Hello world!')
</script>