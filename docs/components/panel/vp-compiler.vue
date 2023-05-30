<template>
    <div class="compiler-wrap">
        <div  class="compiler-result" v-html="source"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    source: {
        type: String,
        require: true
    }
})

</script>