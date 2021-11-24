<template>
  <div class="page">
    <DpInput v-model="testValue"> </DpInput>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import DpInput from '~/components/ui/DpInput.vue'

import { useTestStore } from '~/stores/test'

export default defineComponent({
  setup() {
    const testValue = ref('')
    const testStore = useTestStore()
    return {
      testValue,
      testStore,
    }
  },
  components: { DpInput },
})
</script>
