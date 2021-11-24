<template>
  <Button v-bind="$props"><slot></slot></Button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Button } from 'element-ui'
export default defineComponent({
  components: { Button },
  props: ['size', 'type'],
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
@import '~/assets/style/variable.scss';
@import '~element-ui/packages/theme-chalk/src/button';
</style>
