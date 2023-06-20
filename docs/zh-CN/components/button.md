---
title: Button 按钮
lang: zh-CN
---

<script setup>
import {buttonPanelConfig} from '../../components/panel/config'
</script>

# Button 按钮
::: panel buttonPanelConfig
button/panel-example
:::


### 基础用法
使用 `type`、`round`、`circle` 来定义按钮的样式。
::: demo
button/basic
:::


### 尺寸
使用 `size` 属性改变按钮大小。 除了default默认大小外，还有另外两个选项：small, large。
::: demo
button/sizes
:::


### 禁用状态
使用 `disabled` 属性来控制按钮是否为禁用状态。该属性接受一个 `Boolean` 类型的值。
::: demo
button/disabled
:::