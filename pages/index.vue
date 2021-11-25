<template>
  <div class="container">
    {{ $t('greeting') }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'

import { useAppStore } from '~/stores/app'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const AppStore = useAppStore()

    return {
      AppStore,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.container {
  font-size: 1rem;
}
</style>
