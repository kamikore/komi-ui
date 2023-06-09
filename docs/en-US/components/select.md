---
title: Select
lang: en-US
---

<script setup>
import {selectPanelConfig} from '../../components/panel/config'
</script>

# Select
::: panel selectPanelConfig
select/basic
:::

### Basic
When there are plenty of options, use a Select to display and select desired ones.

`v-model` is the value of option that is currently selected.
::: demo
select/basic
:::


### Disabled
Use `disabled` attribute to determine whether a Select is disabled. It accepts a Boolean value.
::: demo
select/disabled
:::


### Max height
By default,Menu will adapt height based on the content.
Use `maxHeight` to show scrollbar only when the element height exceeds the max height.
::: demo
select/maxHeight
:::

