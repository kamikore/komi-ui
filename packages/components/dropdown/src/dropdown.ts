
export const dropdownProps = {
    items: {
        type: Array,
        default: undefined,
    },
    // 展开触发方式
    trigger: {
        type: String,
        default: 'hover'
    },
    // 菜单弹出位置
    placement: {
        type: String,
        default: 'bottom'
    },
    // 弹出框箭头
    showArrow: {
        type: Boolean,
        default: false
    }

}