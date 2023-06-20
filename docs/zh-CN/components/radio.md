---
title: Radio 单选按钮
lang: zh-CN
---

<script setup>
import {radioPanelConfig} from '../../components/panel/config'
</script>

# Radio 单选按钮
::: panel radioPanelConfig
radio/basic
:::


### 基础用法
Radio单选按钮应使用于较少选项的情况，如果有大量的可选项应使用Checkbox多选框。
使用 Radio 组件，只需要设置 `v-model` 绑定变量， 选中意味着变量的值为相应 Radio `label` 属性的值， label可以是`String`、`Number` 或 `Boolean`。
::: demo
radio/basic
:::


### 尺寸
使用 `size` 属性改变输入框大小。 除了default默认大小外，还有另外两个选项：small, large。
::: demo
radio/sizes
:::


### 禁用状态
通过 disabled 属性指定是否禁用 radio 组件。
::: demo
radio/disabled
:::