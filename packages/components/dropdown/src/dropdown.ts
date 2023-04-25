
export const dropdownProps = {
    label: {
        type: String,
        default: 'Menu'  
    },
    icon: {
        type: String,
        default: undefined
    },
    items: {
        type: Array,
        default: undefined,
    },
    // 展开触发方式
    trigger: {
        type: String,
        value: ['hover','click'],
        default: 'click'
    }

}