<template>
    <ki-dropdown 
        :showArrow="true"
        trigger="click"
        maxHeight="100px"
    >
        <ki-button>Click me !</ki-button>
        <template #dropdown>
            <span>item1</span>
            <span>item2</span>
            <span>item3</span>
            <span>item4</span>
            <span>item5</span>
            <span>item6</span>
            <span>item7</span>
            <span>item8</span>
        </template>
    </ki-dropdown>
</template>