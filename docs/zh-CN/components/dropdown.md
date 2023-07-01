---
title: Dropdown 下拉菜单
lang: zh-CN
---

<script setup>
import {dropdownPanelConfig} from '../../components/panel/config'
</script>

# Dropdown 下拉菜单
::: panel dropdownPanelConfig
dropdown/basic
:::

### 基础用法
通过悬停或是点击在下拉菜单上以展开更多操作。

通过组件默认 slot 来设置下拉触发的元素以及需要通过具名 slot 为 dropdown 来设置下拉菜单。 默认情况下，只需悬停在触发菜单的元素上即可。
::: demo
dropdown/basic
:::

### 最大高度
默认情况下Dropdown会根据内容自适应高度，设置 `maxHeight` 能够在内容超出指定最大高度时，显示滚动条。
::: demo
dropdown/maxHeight
:::

### 触发方式
通过 `trigger` 属性可以配置悬停激活或者点击激活。设置为 click 即为点击激活， 默认为 hover。
::: demo
dropdown/trigger
:::

### 悬浮位置
通过 `placement` 属性可以配激活后菜单的悬浮位置，可选值为 `bottom-start`、`bottom`、`bottom-end`，默认为 bottom。
::: demo
dropdown/placement
:::


