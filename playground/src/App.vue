<template>
  <div>
      <h1>App component !</h1>
      <hr>
      <div class="btn-group">
        <button @click="handleClick(Button)">button</button>
        <button @click="handleClick(Input)">input</button>
        <button @click="handleClick(Popover)">popover</button>
        <button @click="handleClick(Dropdown)">dropdown</button>
      </div>
      <div class="example">
        <component :is="componentId"></component>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {shallowRef} from 'vue'
import Button from './button.vue'
import Input from './input.vue'
import Dropdown from './dropdown.vue'
import Popover from './popover.vue'
const componentId = shallowRef(Popover)

function handleClick(component) {
  componentId.value = component
}
</script>


<style lang="scss" scoped>

  .btn-group {
    margin: 10px;

    button {
      margin: 4px;
    }
  }

  .example {
    // margin: 60px;
    padding: 20px;
    border: 2px solid #f0f0f0;
  }
</style>