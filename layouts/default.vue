<template>
  <AppContainer>
    <div class="sibebar">s</div>
    <div class="content">
      <Nuxt />
    </div>
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

<style lang="scss" scoped>
.appContainer {
  display: grid;
  grid-template-columns: minmax(60px, auto) 1fr;
  align-content: stretch;
  height: 100vh;
  .sibebar {
    padding: var(--app-padding);
    background: var(--side-bar-color);
  }
  .content {
    padding: var(--app-padding);
  }
}
</style>
