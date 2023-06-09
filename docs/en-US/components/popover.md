---
title: Popover
lang: en-US
---


<script setup>
import {popoverPanelConfig} from '../../components/panel/config'

</script>

# Popover
<section>
  <Suspense>
    <Panel :configs="popoverPanelConfig"></Panel>
  </Suspense>
</section>

### Basic Usage
<Suspense>
  <Demo example="popover/basic"></Demo>
</Suspense>
