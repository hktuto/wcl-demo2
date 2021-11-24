<template>
  <div class="container">
    {{ $t('greeting') }}
    <input v-model="AppStore.baseFontSize" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

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
