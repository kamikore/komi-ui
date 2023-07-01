---
title: Menu
lang: en-US
---

<script setup>
import {menuPanelConfig} from '../../components/panel/config'
</script>

# Menu
::: panel menuPanelConfig
menu/basic
:::

### Basic
Use Menu to display a list of actions.
The interaction operation is completed by passing the `onItemSelect` callback function, which provides the `event` event object, the `value` selected menu item value, and the `index` selected menu item index.

::: demo
menu/basic
:::


### Max height
By default, Menu will adapt height based on the content.
Use `maxHeight` to show scrollbar only when the element height exceeds the max height.
::: demo
menu/maxHeight
:::


### Sizes
::: demo
menu/sizes
:::

