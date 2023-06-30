---
title: Radio
lang: en-US
---

<script setup>
import {radioPanelConfig} from '../../components/panel/config'
</script>

# Radio
::: panel radioPanelConfig
radio/basic
:::


### Basic Usage
Radio should not have too many options. Otherwise, use the Checkbox component instead.

Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of label is `String`, `Number` or `Boolean`.
::: demo
radio/basic
:::


### Sizes
Add `size` attribute to change the size of Radio. In addition to the default size, there are two other options: small, large.
::: demo
radio/sizes
:::


### Disabled
Use `disabled` attribute to determine whether a Radio is disabled. It accepts a Boolean value.
::: demo
radio/disabled
:::