<template>
    <div>
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
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>