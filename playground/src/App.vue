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
        <ki-button @click="handleClick" type="primary">primary</ki-button>
      </div>
      <div>
        <button disabled @click="handleClick" >click me</button>
      </div>
      <div>
        <button autofocus>autofocus button</button>
      </div>
      <hr>
      <ki-input placeholder="is default"></ki-input>
      <ki-input type="password" placeholder="is password"></ki-input>
      <hr>
      <ki-dropdown></ki-dropdown>
  </div>
</template>

<script setup>
function handleClick() {
  console.log("123")
}
</script>

<style lang="scss" scoped>

</style>