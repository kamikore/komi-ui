---
title: Select 选择器
lang: zh-CN
---

<script setup>
import {selectPanelConfig} from '../../components/panel/config'
</script>

# Select 选择器
::: panel selectPanelConfig
select/basic
:::

### 基本使用
当选项过多时，采用Select能够以较小空间展示更多选项。

`v-model` 的值为当前被选中的 option 的 `value` 属性值。
::: demo
select/basic
:::


### 禁用状态
使用 `disabled` 属性来控制选择器是否为禁用状态。该属性接受一个 `Boolean` 类型的值
::: demo
select/disabled
:::

