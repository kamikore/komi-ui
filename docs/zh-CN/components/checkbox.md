---
title: Checkbox 多选框
lang: zh-CN
---

<script setup>
import {checkboxPanelConfig} from '../../components/panel/config'
</script>

# Checkbox 多选框
::: panel checkboxPanelConfig
checkbox/panel-example
:::


### 基础用法
当单独使用可以表示 `Boolean` 两种状态之间的切换。
搭配checkbox-group 元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为true。
ki-checkbox 标签中的内容将成为多选框按钮之后的描述。
::: demo
checkbox/basic
:::

### 尺寸
使用 `size` 属性改变多选框大小。 除了default默认大小外，还有另外两个选项：small, large。
::: demo
checkbox/sizes
:::

### 禁用状态
使用 `disabled` 属性来控制多选框是否为禁用状态。该属性接受一个 `Boolean` 类型的值
::: demo
checkbox/disabled
:::