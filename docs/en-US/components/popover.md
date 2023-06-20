---
title: Popover
lang: en-US
---

<script setup>
import {popoverPanelConfig} from '../../components/panel/config'
</script>

# Popover
::: panel popoverPanelConfig
popover/basic
:::

### Basic Usage
Popover provide the container and styles to overlay menus, tooltips, controls or text. They’re visually represented as a layer above other components and objects in a view, and float above a content view after being triggered 
::: demo
popover/basic
:::


### Sizes
Add `size` attribute to change the size of Popover. In addition to the default size, there are two other options: small, large.
::: demo
popover/sizes
:::


### Placement
 Use attribute `placement` determines the position of the popover. Its value with four orientations `top`, `left`, `right`, `bottom` and three alignments `start`, `end`, `null`, and the default placement is bottom. 
::: demo
popover/placement
:::


### trigger
Click the triggering element or hover on it.

Use the attribute `trigger`. By default, it is hover.
::: demo
popover/trigger
:::