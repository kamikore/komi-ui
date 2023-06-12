<template>
    <div class="v-props_wrap" v-if="configs">
        <template 
            v-for="({value = undefined,type,options,description}, key) in configs" 
            :key="key"
        >
            <!-- prop label -->
            <div v-if="type === Boolean">
                <ki-checkbox :label="key" v-model="compProps[key]">
                    <PropsLabel :title="key" :type="type" :description="description"/>
                </ki-checkbox>
            </div>
            <div v-else-if="type === 'Enum'">
                <PropsLabel :title="key" :type="type" :description="description"/>
                <ki-radio-group v-model="compProps[key]">
                    <ki-radio
                        v-for="option of options" 
                        :key="option" 
                        :label="option" 
                    />
                </ki-radio-group>
            </div>
            <div v-else-if="String(type).includes('Function')">
                <PropsLabel :title="key" :type="type" :description="description"/>
                <ki-input 
                    type="textarea" 
                    :id="key" 
                    :placeholder="value"
                    v-model="compProps[key]"
                />
            </div>
            <div v-else>
                <PropsLabel :title="key" :type="type" :description="description"/>
                <ki-input 
                    :id="key" 
                    :placeholder="value"
                    v-model="compProps[key]"
                />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import PropsLabel from '../panel/vp-props-label.vue'
import {reactive, watchEffect, inject} from 'vue'
import { Store,defaultMainFile } from './store'
import type { PropType } from "vue"

interface Prop<T = any> {
    value: String | undefined,
    options?: Array<string>,
    type: PropType<T> | String,
    description: String
}


const props = defineProps<{
    configs?: Record<string,Prop>
}>()

const compProps = reactive<Record<string,any>>({})
// 初始化
for(let key in props.configs) {
    compProps[key] = props.configs[key].value
}

// 注入store
const store = inject('store') as Store

watchEffect(() => {
    console.log('compProps 修改', compProps)
    store.state.compProps[defaultMainFile] = compProps
})

</script>

<style lang="scss" scoped>
.v-props_wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
}


</style>