<template>
  <div>
      <h1>App component !</h1>
      <div>
        <kiButton>123</kiButton>
      </div>
      <div>
        <KiButton @click="handleClick"  round disabled>this is button</KiButton>
      </div>
      <div>
        <kiButton @click="handleClick" type="primary">primary</kiButton>
      </div>
      <div>
        <button disabled @click="handleClick" >click me</button>
      </div>
      <div>
        <button autofocus>autofocus button</button>
      </div>
  </div>
</template>

<script setup>
function handleClick() {
  console.log("123")
}
</script>

<style lang="scss" scoped>

</style>