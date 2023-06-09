<template>
    <ki-dropdown 
        :showArrow="true"
        trigger="click"
    >
        <button>Click me !</button>
        <span>span</span>
        <template #dropdown>
            <span>item1</span>
            <span>item2</span>
            <span>item3</span>
            <span>item4</span>
            <span>item5</span>
        </template>
    </ki-dropdown>
</template>
