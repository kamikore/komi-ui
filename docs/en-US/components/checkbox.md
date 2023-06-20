---
title: Checkbox
lang: en-US
---

<script setup>
import {checkboxPanelConfig} from '../../components/panel/config'
</script>

# Checkbox
::: panel checkboxPanelConfig
checkbox/panel-example
:::


### Basic Usage
Checkbox can be used alone to switch between the two states of `Boolean`.
Define `v-model(bind variable)` in ki-checkbox. The default value is a `Boolean` for single checkbox, and it becomes true when selected. Content inside the ki-checkbox tag will become the description following the button of the checkbox.
::: demo
checkbox/basic
:::

### Sizes
Add `size` attribute to change the size of Checkbox. In addition to the default size, there are two other options: small, large.
::: demo
checkbox/sizes
:::

### Disabled
Use disabled attribute to determine whether a Checkbox is disabled. It accepts a Boolean value.
::: demo
checkbox/disabled
:::