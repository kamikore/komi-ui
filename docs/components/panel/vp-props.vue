<template>
    <div class="v-props_wrap">
        <template 
            v-for="({value,type,options,description}, key) in configs" 
            :key="key"
        >
            <!-- prop label -->
            <div v-if="type === Boolean">
                <ki-checkbox :label="key" />
            </div>
            <div v-else-if="type === 'Enum'">
                <label :for="key">{{ key }}</label>
                <ki-radio-group v-modle="key">
                    <ki-radio
                        v-for="option of options" 
                        :key="option" 
                        :label="option" 
                    />
                </ki-radio-group>
            </div>
            <div v-else-if="String(type).includes('Function')">
                <label :for="key">{{ key }}</label>
                <ki-input type="textarea" :id="key" :placeholder="value"/>
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



</script>

<style lang="scss" scoped>
.v-props_wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
}


</style>