---
title: Popover 弹出框
lang: zh-CN
---


<script setup>
import {popoverPanelConfig} from '../../components/panel/config'
</script>

# Popover 弹出框
::: panel popoverPanelConfig
popover/basic
:::

### 基础用法
Popover弹出框复用于多处地方，包括`Dropdown`，`Tooltip`等。它在视觉上表示为视图中其他组件或对象的上层，并在被点击或悬停触发后浮动在内容视图上方。
::: demo
popover/basic
:::


### 尺寸
使用 `size` 属性改变弹出框大小。 除了default默认大小外，还有另外两个选项：small, large。
::: demo
popover/sizes
:::


### 悬浮位置
使用 `placement` 属性改变弹出框相对于触发元素的悬浮位置。分别有四个方向 `top`、`bottom`、`left`、`right`，三种对齐位置 `start`、`end`、`null`，默认位置为bottom。悬浮展示效果如下： 
::: demo
popover/placement
:::


### 触发方式
通过 `trigger` 属性可以配置悬停激活或者点击激活。设置为 click 即为点击激活， 默认为 hover。
::: demo
popover/trigger
:::