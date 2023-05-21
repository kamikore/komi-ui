<template>
    <div :class="[ ns.b()]">
        {{modelValue}}
        <input 
            :class="ns.e('inner')"
			ref="input"
            v-bind="$attrs"
			:disabled="disabled"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            @input="handleInput"
            @focus="handleFocus"
            @change="handleChange"
        >
        
        <!-- suffix slot -->
        <span
            :class="ns.e('suffix-inner')"
            v-if="clearable || showPassword"
            v-show="modelValue"
        >
            <i 
				:class="ns.e('clear')" 
				v-show="showClear" 
				@click="handleClearClick"
			>
                <span>×</span>
            </i>
            <i 
				:class="ns.e('password')" 
				v-show="showPwdVisible" 
				@click="handlePasswordClick"
			>
                <span>👀</span>
            </i>
        </span>

    </div>
    
</template>

<script lang="ts" setup>
import {
	nextTick,
	shallowRef,
	ref,
	computed,
	onMounted,
} from 'vue'
import {inputProps, inputEmits} from './input'
import {useNamespace} from '@komi-ui/hooks'
import {isString, isNil} from '@komi-ui/utils'

defineOptions({
    name: 'KiInput'
})

const emit = defineEmits(inputEmits)

const props = defineProps(inputProps)
console.log('input props:',props)

const ns = useNamespace('input')



const input = shallowRef<HTMLInputElement>(null)
// 组件引用 ref
const _ref = computed(() => input.value)


// input.value的值，如果未提供v-model则一直为''
const nativeInputValue = computed(() =>
  !props.modelValue ? '' : String(props.modelValue)
)

const setNativeInputValue = () => { 
	console.log("此时的value",nativeInputValue.value)
	// input element
	const input = _ref.value		
	if (!input || input.value === nativeInputValue.value) return
	input.value = nativeInputValue.value
}


const showClear = computed(
  () =>
    props.clearable &&
    !props.disabled &&
    !props.readonly &&
    nativeInputValue.value
)

// type="password" to show password
const passwordVisible = ref(false)

const showPwdVisible = computed(
  () =>
    props.showPassword &&
    !props.disabled &&
    !props.readonly &&
    nativeInputValue.value 
)

const suffixVisible = computed(
  () =>
    props.clearable ||
    props.showPassword
)




const handleInput = async(e) =>  {
    let { value } = e.target
    if (props.formatter) {
        value = props.parser ? props.parser(value) : value
        value = props.formatter(value)
    }
	
	// should remove the following line when we don't support IE
	if (value === nativeInputValue.value) {
		setNativeInputValue()
		return
	}
	
	emit('update:modelValue', value)
	

	emit('input', value)
	
	// 等待 DOM 更新后设置 input.value, 
	// 否则modelValue不确定的更新导致nativeValue异常
	await nextTick()
	
	setNativeInputValue()
}

const handleChange = (e: Event) => {
	console.log("change event")
	// 触发事件钩子
	emit('change',e.target.value)
}

const handleFocus = () => {

}

const handleClearClick = () => {
    emit('update:modelValue','')

}


const handlePasswordClick = () => {
    passwordVisible.value = !passwordVisible.value
}

onMounted(() => {
	setNativeInputValue()
})



</script>
