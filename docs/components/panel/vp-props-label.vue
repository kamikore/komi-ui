<template>
    <ki-popover>
        <label>{{ title }}</label>
        <template #content>
            <h5>{{title + ': ' +  formatType(type)}}</h5>
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

h4 {
    font-weight: 600;
}


</style>