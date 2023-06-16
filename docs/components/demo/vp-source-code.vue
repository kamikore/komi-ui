<template>
    <div class="source-code-wrap">
        <pre v-html="decoded"></pre>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => 
   decodeURIComponent(props.source)
)
</script>

<style lang="scss" scoped>
.source-code-wrap {
    position: relative;
    font-size: 14px;
    text-align: left;
    color: #333333;
    font-family: var(--vp-font-family-mono);
    padding: 12px;
    background-color: #eeeeee;
    border-radius: 12px;



    pre {
        height: 100%;
        width: 100%;
        font-size: inherit;
        text-align: inherit;
        font-family: inherit;
        margin: 0;
        padding: 0;

        overflow-wrap: break-word;

        // 允许<pre>中换行
        word-wrap: break-word;      /* IE 5.5-7 */
        white-space: pre-wrap;      /* current browsers */
    }

}

</style>