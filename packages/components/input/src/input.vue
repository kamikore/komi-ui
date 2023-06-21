<template>
    <div :class="[ 
        type === 'textarea'? nsTextarea.b() : ns.b(),
        ns.is('focused', focused),
        type === 'textarea'? '' : ns.m(size),
        disabled?'is-disabled':''
    ]">
        <input 
            v-if="type !== 'textarea'"
            :class="ns.e('inner')"
			ref="input"
            v-bind="$attrs"
			:disabled="disabled"
            :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @keydown="handleKeydown"
        >

        <div 
            v-else-if="type === 'textarea' && autoResize"
            :class="nsTextarea.e('autoResizeWrap')"
        >
            <textarea
                ref="textarea"
                :class="nsTextarea.e('inner')"
                v-bind="$attrs"
                :disabled="disabled"
                :placeholder="placeholder"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                @keydown="handleKeydown"
            ></textarea>

            <pre>
                {{ modelValue }}
            </pre>
        </div>

        
        <textarea
            v-else
            ref="textarea"
            :class="nsTextarea.e('inner')"
            v-bind="$attrs"
			:disabled="disabled"
            :placeholder="placeholder"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @keydown="handleKeydown"
        ></textarea>


        
        <!-- suffix slot -->
        <span
            :class="type === 'textarea'? nsTextarea.e('suffix-inner') : ns.e('suffix-inner')"
            v-if="clearable || showPassword"
            v-show="modelValue"
        >
            <i 
				:class="type === 'textarea'? nsTextarea.e('clear') : ns.e('clear')" 
				v-show="showClear" 
				@click="handleClearClick"
			>
                <span>×</span>
            </i>
            <i 
				:class="ns.e('password')" 
				v-show="showPwdVisible && type !== 'textarea'" 
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
    watch,
	computed,
	onMounted,
} from 'vue'
import {inputProps, inputEmits} from './input'
import {useNamespace} from '@komi-ui/hooks'
import {isNil} from '@komi-ui/utils'

defineOptions({
    name: 'KiInput'
})

const emit = defineEmits(inputEmits)

const props = defineProps(inputProps)

const ns = useNamespace('input')
const nsTextarea = useNamespace('textarea')


const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()
// 组件引用 ref
const _ref = computed(() => input.value || textarea.value)


const focused = ref(false)
// input.value的值，如果未提供v-model则一直为''
const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue)
)

const setNativeInputValue = () => { 
	// input element value
	const input = _ref.value		
	if (!input || input.value === nativeInputValue.value) return
	input.value = nativeInputValue.value
}

// 监听modelValue否则无法绑定统一v-model时更新
watch(nativeInputValue, () => setNativeInputValue())


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


const handleInput = async(e: Event) =>  {
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
	// 触发事件钩子
	emit('change',e.target.value)
}


const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}


const handleKeydown = (evt: KeyboardEvent) => {
  emit('keydown', evt)
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
