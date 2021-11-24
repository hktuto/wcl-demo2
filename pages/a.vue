<template>
  <div class="page">
    <DpInput v-model="testValue"> </DpInput>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import DpInput from '~/components/ui/DpInput.vue'

export default defineComponent({
  setup() {
    const testValue = ref('')
    return {
      testValue,
    }
  },
  components: { DpInput },
})
</script>
