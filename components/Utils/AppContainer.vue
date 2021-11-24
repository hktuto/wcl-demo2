<template>
  <div class="appContainer">
    <slot />
  </div>
</template>

<script lang="ts">
import { useMeta, watch, defineComponent } from '@nuxtjs/composition-api'

import { useAppStore } from '~/stores/app'

export default defineComponent({
  name: 'AppContainer',
  setup() {
    const AppStore = useAppStore()
    const { htmlAttrs } = useMeta()

    watch(
      () => AppStore.baseFontSize,
      (fontSize) => {
        htmlAttrs.value = {
          style: `--base-font-size:${fontSize}`,
        }
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
