<template>
    <div class="v-props_wrap">
        <template 
            v-for="({value,type,options,description}, key) in configs" 
            :key="key"
        >
            <div v-if="type === Boolean">
                <ki-input type="checkbox" :check="value" :id="key"/>
                <label :for="key">{{ key }}</label>
            </div>
            <div v-else-if="type === 'Enum'">
                <fieldset>
                    <template v-for="option of options" :key="option">
                        <ki-input type="radio" :id="option" :name="key" :value="option" />
                        <label :for="option">{{ option }}</label>
                    </template>
                </fieldset>
            </div>
            <div v-else>
                <label :for="key">{{ key }}</label>
                <ki-input :id="key" :placeholder="value"/>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
interface Prop {
    value: String,
    options?: Array<string>,
    type: Object | String,
    description: String
}

import {computed} from 'vue'


const props = defineProps<{
    configs: Record<string,Prop>
}>()

// function propToElm(prop: Prop): String {
//     const {value,type,options,description} = prop
//     if(type === Boolean) return 
// }


</script>

<style lang="scss" scoped>
.v-props_wrap {
    fieldset {
        border: none;
    }
}


</style>