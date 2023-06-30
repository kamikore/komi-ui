---
title: Input 输入框
lang: zh-CN
---

<script setup>
import {inputPanelConfig} from '../../components/panel/config'
</script>

# Input 输入框
::: panel inputPanelConfig
input/basic
:::

### 基础用法
::: demo
input/basic
:::


### 尺寸
使用 `size` 属性改变输入框大小。 除了default默认大小外，还有另外两个选项：small, large。
::: demo
input/sizes
:::

### 禁用状态
使用 `disabled` 属性来控制输入框是否为禁用状态。该属性接受一个 `Boolean` 类型的值
::: demo
input/disabled
:::

### 一键清空
设置 `clearable` 属性即可得到一个可一键清空的输入框。
::: demo
input/clearable
:::

### 密码框
设置 `type="password"` 属性即可得到一个密码框，搭配或单独设置 `show-password` 属性可以得到一个可切换显示隐藏的密码框。
::: demo
input/password
:::


### 文本域
用于输入多行文本信息可缩放的输入框。 通过设置 `type="textarea"` 属性来将 input 元素转换为原生的 textarea 元素。

文本域高度可通过 rows 属性控制。
::: demo
input/textarea
:::


### 自适应文本域
当 `type="textarea"` 时，设置 autoResize 属性使得文本域能够根据内容自动调整的高度。
::: demo
input/autoResize
:::