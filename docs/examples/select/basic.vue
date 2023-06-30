<template>
    <ki-select
        v-model="value"
        :options="options"
        placeholder="Please Select"
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
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
]

</script>