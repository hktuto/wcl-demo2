<template>
  <Icon v-bind="$props" />
</template>

<script lang="ts">
import { defineComponent } from '#app'
import { Icon } from 'element-ui'
export default defineComponent({
  components: { Icon },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
@import '~/assets/style/variable.scss';
@import '~element-ui/packages/theme-chalk/src/icon';
</style>
