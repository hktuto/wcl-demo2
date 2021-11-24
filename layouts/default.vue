<template>
  <AppContainer>
    <Nuxt />
  </AppContainer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppContainer from '~/components/Utils/AppContainer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { AppContainer },
  setup() {
    return {}
  },
})
</script>
