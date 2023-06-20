---
title: Button
lang: en-US
---

<script setup>
import {buttonPanelConfig} from '../../components/panel/config'
</script>

# Button
::: panel buttonPanelConfig
button/panel-example
:::

### Basic Usage
Use `type`, `round` and `circle` to define Button's style.
::: demo
button/basic
:::

### Sizes
Add `size` attribute to change the size of Button. In addition to the default size, there are two other options: small, large.
::: demo
button/sizes
:::

### Disabled Button
Use disabled attribute to determine whether a Button is disabled. It accepts a Boolean value.
::: demo
button/disabled
:::