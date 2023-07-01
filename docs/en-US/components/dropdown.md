---
title: Dropdown
lang: en-US
---

<script setup>
import {dropdownPanelConfig} from '../../components/panel/config'
</script>

# Dropdown
::: panel dropdownPanelConfig
dropdown/basic
:::


### Basic Usage
Hover or Click on the dropdown menu to unfold it for more actions.

The triggering element is rendered by the default slot, and the dropdown part is rendered by the slot named dropdown. By default, dropdown list shows when you hover on the triggering element.
::: demo
dropdown/basic
:::

### Max height
By default, Dropdown will adapt height based on the content.
Use `maxHeight` to show scrollbar only when the element height exceeds the max height.
::: demo
dropdown/maxHeight
:::


### Trigger
Click the triggering element or hover on it.

Use the attribute `trigger`. By default, it is hover.
::: demo
dropdown/trigger
:::

### Placement
Use `placement` to define the floating position of the activated menu.

The optional values are `bottom start`, `bottom`, and `bottom end`, with the default being bottom.
::: demo
dropdown/placement
:::
