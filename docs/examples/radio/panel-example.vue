<template>
  <ki-radio v-model="value">radio</ki-radio>
</template>


<script setup>
import {ref, watchEffect} from 'vue'

const value = ref('')
</script>