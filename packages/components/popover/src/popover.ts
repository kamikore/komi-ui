

export const popoverProps = {
    trigger: {
        type: String,
        value: ['hover','click'],
        default: 'hover'
    },
    showArrow: {
        type: Boolean,
        default: false
    },
    placement: {
        type: String,
        value:[
            'bottom',
            'bottom-start',
            'bottom-end',
            'top',
            'top-start',
            'top-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
        ],
        default: 'bottom'
    }
}