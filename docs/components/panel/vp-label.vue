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

defineOptions({
    name: 'VPLabel'
})

const props = defineProps<{
    title: String,
    description: String,
    type:  Array<any> | String,
}>()

function formatType(
    type: any
):String {
 
    const typeMap = new Map([
        [Boolean,'Boolean'],
        [String,'String'],
        [Number,'Number'],
        [HTMLElement,'HTMLElement'],
        ['HTMLElement','HTMLElement'],
        [Element,'Element'],
        ['Element','Element'],
        [Function,'Function'],
        [Array,'Array'],
        ['Enum','Enum']
    ])


    let str = ''
    if(Array.isArray(type)) {
        type.forEach((value, index) => {
            str += typeMap.get(value) + (index === type.length-1 ? '': ' | ')
        })
    } else {
        str += typeMap.get(type)
    }

    return str
}

</script>

<style lang="scss" scoped>

label {
    cursor: pointer;
    text-decoration: underline;
}

h3 {
    font-size: 14px;
    font-weight: 800;
}


</style>