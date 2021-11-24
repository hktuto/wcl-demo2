<template>
  <AppContainer>
    <Sidebar />
    <div class="content">
      <Nuxt />
    </div>
  </AppContainer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppContainer from '@/components/Utils/AppContainer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { AppContainer, Sidebar },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.appContainer {
  display: grid;
  grid-template-columns: min-content 1fr;
  align-content: stretch;
  height: 100vh;
  > * {
    overflow-y: auto;
    overflow-x: hidden;
  }
  @media (max-width: 640px){
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
}
</style>
