<template>
    <ki-select
        v-model="value"
        :options="options"
        placeholder="Is disabled"
        disabled
    >
    </ki-select>
</template>

<script setup lang="ts">
import { ref , watchEffect} from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]

</script>