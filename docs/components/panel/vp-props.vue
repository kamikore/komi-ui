<template>
    <div class="v-props_wrap" v-if="configs && name">
        <template 
            v-for="({
                placeholder,
                type,
                options,
                description
            }, key) in configs" 
            :key="key"
        >
            <!-- prop label -->
            <div v-if="type === Boolean">
                <ki-checkbox :label="key" v-model="compProps[key]">
                    <PropsLabel :title="key" :type="type" :description="description"/>
                </ki-checkbox>
            </div>
            <div v-else-if="type === 'Enum' && isArray(options)">
                <PropsLabel :title="key" :type="type" :description="description"/>
                <ki-select 
                    v-if="options?.length > 4"
                    :options="options && formatSelectOptions(options)"
                    v-model="compProps[key]"
                    :placeholder="placeholder"
                >
                </ki-select>
                <ki-radio-group v-else v-model="compProps[key]">
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
                    :placeholder="placeholder"
                    v-model="compProps[key]"
                    autoResize
                />
            </div>
            <div v-else>
                <PropsLabel :title="key" :type="type" :description="description"/>
                <ki-input 
                    type="textarea" 
                    :id="key" 
                    :placeholder="placeholder"
                    v-model="compProps[key]"
                    autoResize
                />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import PropsLabel from '../panel/vp-props-label.vue'
import {reactive, watch, watchEffect, inject} from 'vue'
import { Store, defaultMainFile } from './store'
import {isArray} from '@komi-ui/utils'
import type { PropType } from "vue"

interface Prop<T = any> {
    value: String | undefined,
    placeholder: String | undefined,
    options?: Array<string>,
    type: PropType<T> | String,
    description: String
}


const props = defineProps<{
    name?: String
    configs?: Record<string,Prop>
}>()

const compProps = reactive<Record<string,any>>({})
// 初始化
for(let key in props.configs) {
    compProps[key] = props.configs[key].value
}

// 注入store
const store = inject('store') as Store

store.state.compProps[defaultMainFile] = compProps 

watch(
  () => store.state.compProps[defaultMainFile],
  (newValue, oldValue) => {
        store.state.mainFile.code = formatCode(newValue)
  },
  { deep: true, immediate: true}
)

/**
 * @description 格式化Enum类型的prop可选值数组
 * @param options prop 可选值数组
 */
function formatSelectOptions(options: Array<string>) {
    if(!isArray(options)) return options

    return options.map(option => (
        { 
            label:option, 
            value:option
        }
    ))
}


/**
 * @description 根据组件props格式化代码
 * @param compProps 组件props
 * @returns 返回处理后代码
 */
function formatCode(compProps: Record<string,any>) {
    let propsStr = ''
    for(let key in compProps) {
        if(!compProps[key]) continue

        if(key === 'children') continue
        if(key === 'modelValue') {
            propsStr += `\n\tv-model="${compProps[key]}"`
            continue
        }
        switch(props?.configs[key].type) {
            case String: 
            case 'Enum':
                propsStr += `\n\t${key}="${compProps[key]}"`
                break
            case Function: 
                propsStr += `\n\t@${key}="${compProps[key]}"`
                break
            default:
                propsStr += `\n\t:${key}="${compProps[key]}"`
                break
        }
    }

    // ?<= ,?=< 匹配组件名称的前后内容
    const templateReg = new RegExp(`(?<=<${props.name}(.*[^=])?>)(.*)(?=<\/${props.name}>)`,'s')
    const scriptReg = new RegExp('<script.*?>(.*)<\/script>','s')
    const styleReg = new RegExp('<style.*?>(.*)<\/style>','s')

    console.log(props.configs)
console.log(props.configs?.children.value)

return  `
<template>
    <${props.name}${propsStr}
    > 
        ${ props.configs?.children.value || templateReg.exec(store.state.mainFile.code)?.[0].trim() || ''}
    </${props.name}>
</template>

${scriptReg.exec(store.state.mainFile.code)?.[0].trim() || ''}

${styleReg.exec(store.state.mainFile.code)?.[0].trim() || ''}

`.trim()

}

</script>

<style lang="scss" scoped>
.v-props_wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
}

</style>