---
title: Setup
lang: en-US
---

# Setup
The project relies on the new version of Vue 3.3, and some experimental new features have been supported in the official version, making component development more convenient and eliminating some Vue extension libraries.

## Using Package Manager
We recommend using the `pnpm` package manager to install KomiUi
```bash
# pnpm
pnpm add komi-ui vue

# npm
npm install komi-ui vue
```


## Import in Browser
Import KomiUi through browser HTML tags directly, so that a 'KomiUi' Global variable can be obtained.

NPM provides different CDN services, and when accessing CDN links, it will redirect to the corresponding file resource links. The introduction methods of different CDN providers are as follows:

### Import in Browser
```html
<head>
    <!-- Import Vue 3 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <!-- Import component library -->
    <script src="https://unpkg.com/komi-ui"></script>
    <!-- Import style -->
    <link rel="stylesheet" href="https://unpkg.com/komi-ui/dist/index.css" />
</head>
```


### jsDelivr
```html
<head>
    <!-- Import Vue 3 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"></script>
    <!-- Import component library -->
    <script src="https://cdn.jsdelivr.net/npm/komi-ui"></script>
    <!-- Import style -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/komi-ui/dist/index.css" />
</head>
```