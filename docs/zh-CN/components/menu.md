---
title: Menu 菜单
lang: zh-CN
---

<script setup>
import {menuPanelConfig} from '../../components/panel/config'
</script>

# Menu 菜单
::: panel menuPanelConfig
menu/basic
:::

### 基本使用
Menu提供了一个执行操作的列表。
通过传递`onItemSelect` 回调函数完成交互操作，该回调提供 `event`事件对象、`value`选中的菜单项值以及`index`选中的菜单项索引。
::: demo
menu/basic
:::


### 菜单最大高度
默认情况下Menu会根据内容自适应高度，设置 `maxHeight` 能够在内容超出指定最大高度时，显示滚动条。
::: demo
menu/maxHeight
:::


### 尺寸
::: demo
menu/sizes
:::
