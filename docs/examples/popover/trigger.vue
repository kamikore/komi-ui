<template>
    <ki-popover>
        <ki-button>Hover me</ki-button>
        <template #content>
            <h4>title</h4>
            <p>this is content</p>
        </template>
    </ki-popover>
    <ki-popover trigger="click">
        <ki-button>Click me</ki-button>
        <template #content>
            <h4>title</h4>
            <p>this is content</p>
        </template>
    </ki-popover>
</template>