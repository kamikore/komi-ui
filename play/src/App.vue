<template>
  <div>
      <h1>App component !</h1>
      <div>
        <kiButton>123</kiButton>
      </div>
      <div>
        <KiButton round disabled>this is button</KiButton>
      </div>
      <div>
        <kiButton type="primary">primary</kiButton>
      </div>
      <button disabled @click="handleClick" >click me</button>
  </div>
</template>

<script setup>
function handleClick() {
  console.log("123")
}
</script>

<style lang="scss" scoped>

</style>