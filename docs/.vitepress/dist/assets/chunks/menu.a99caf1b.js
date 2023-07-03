import{C as e}from"./constants.0c9a1fd0.js";const i={name:"ki-menu",example:"menu/basic",props:{onItemSelect:{placeholder:"() => {}",type:Function,description:"Callback executed on menu item clicks."},modelValue:{type:[String,Number,Boolean,Object],description:"Binding value."},size:{default:"default",options:e,type:"Enum",description:"Defines the size of the menu."},items:{value:`[
                { label: 'Item One' },
                { label: 'Item Two' },
                { label: 'Item Three' },
                { label: 'Item Four' }
            ]`,type:Array,description:"Array of items in the menu."},maxHeight:{type:[String,Number],description:"Defines the max height of the menu."}}};export{i as m};
