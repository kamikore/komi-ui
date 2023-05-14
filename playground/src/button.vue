<template>
    <div>
        <div>
            <KiButton>123</KiButton>
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
    </div>
</template>

<script lang="ts" setup>
function handleClick() {
    console.log("123");
    
}
</script>

<style lang="scss" scoped>


</style>