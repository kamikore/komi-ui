<template>
    <ki-popover style="max-width: 240px;">
        <label>{{ title }}</label>
        <template #content>
            <h3>{{title + ': ' +  formatType(type)}}</h3>
            <p>{{ description }}</p>
        </template>
    </ki-popover>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: String,
    description: String,
    type: Function | Array<Function> | String,
}>()

function formatType(
    type: Function | Array<Function> | String
):String {
 
    const typeMap = new Map([
        [Boolean,'Boolean'],
        [String,'String'],
        [Number,'Number'],
        [HTMLElement,'HTMLElement'],
        [Function,'Function'],
        [Array,'Array'],
        ['Enum','Enum']
    ])


    let str = ''
    if(Array.isArray(type)) {
        for(let item of type) {
            str += typeMap.get(item)
        }
    } else {
        str += typeMap.get(type)
    }

    return str
}

</script>

<style lang="scss" scoped>

label {
    text-decoration: underline;
}

h3 {
    font-size: 14px;
    font-weight: 800;
}


</style>