<template>
  <div class="appContainer">
    <slot />
  </div>
</template>

<script lang="ts">
import {  watch, defineComponent } from '#app'

import { useAppStore } from '~/stores/app'

export default defineComponent({
  name: 'AppContainer',
  setup() {
    const AppStore = useAppStore()
    // const { htmlAttrs } = useMeta()

    watch(
      () => AppStore.baseFontSize,
      (_) => {
        // htmlAttrs.value = {
        //   style: `--base-font-size:${fontSize}`,
        // }
      },
      {
        immediate: true,
      }
    )
    return {}
  },
  head: {},
})
</script>
