

export const inputProps = {
    // 原生属性
    type: {
        type: String,
        value:['text','password','email','file'],
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    readonly: Boolean,
    require: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    checked: Boolean,
    maxlength: {
        type: Number,
        
    },
    minlength: {
        type:Number,
    }
}