---
title: Dropdown
lang: en-US
---


<script setup>
import {dropdownPanelConfig} from '../../components/panel/config'

</script>

# Dropdown
<section>
  <Suspense>
    <Panel :configs="dropdownPanelConfig"></Panel>
  </Suspense>
</section>

### Basic Usage
<Suspense>
  <Demo example="dropdown/basic"></Demo>
</Suspense>
