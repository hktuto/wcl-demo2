<template>
  <img :src="`/images/logo-${mode}-${$colorMode.value === 'system' ? 'dark' : $colorMode.value}.svg`" />
</template>

<script lang="ts">
import { defineComponent } from '#app'

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'withName',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.logoContainer {
  //   background: ;
}
.dark-mode {
}

.light-mode {
}
</style>
