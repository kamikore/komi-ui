<template>
    <div :class="[ns.b()]">
        <!-- 展开标签 -->
        <div 
            :class="[ns.e('label')]" 
            v-on:[trigger]="showMenu"
            ref="label"
        >
            <i v-if="icon" :class="[ns.e('icon')]"></i>
            <span>{{ label }}</span>
        </div>
        <!-- 菜单选项卡 -->
        <div :class="[ns.e('menu')]" v-show="isShow">
            <ul v-if="items?.length">
                <li v-for="(item, index) in items" :key="index"></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import {useNamespace} from '@komi-ui/hooks'
import {dropdownProps} from './dropdown'

defineOptions({
    name: 'KiDropdown'
})

const props = defineProps(dropdownProps)
const ns = useNamespace('dropdown')
const isShow = ref(false)
const Label = ref(null)

function showMenu() {
    
}

console.log("dropdown props:",props);
console.log("dropdown label:", label);

</script>
