---
title: Input
lang: en-US
---

<script setup>
import {inputPanelConfig} from '../../components/panel/config'
</script>

# Input
::: panel inputPanelConfig
input/basic
:::

### Basic Usage
::: demo
input/basic
:::


### Sizes
Add `size` attribute to change the size of Input. In addition to the default size, there are two other options: small, large.
::: demo
input/sizes
:::


### Disabled
Disable the Input with the `disabled` attribute.
::: demo
input/disabled
:::


### Clearable
Make the Input clearable with the `clearable` attribute.
::: demo
input/clearable
:::

### Password box
Make a password Input with the `type="password"` attribute. Make a toggle-able password Input with the `show-password` attribute alone or in combination.
::: demo
input/password
:::


### Textarea
Resizable for entering multiple lines of text information. Add attribute `type="textarea"` to change input into native textarea.

Control the height by setting the `rows` prop.
::: demo
input/textarea
:::


### AutoResize Textarea
Setting the `autoResize` prop for a textarea type of Input makes the height to automatically adjust based on the content. 
::: demo
input/autoResize
:::