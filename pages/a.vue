<template>
  <div class="page">
    <DpInput v-model="testValue" label="test input"> </DpInput>
    <DpButton type="primary">button</DpButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '#app'
import DpInput from '~/components/ui/DpInput.vue'

import { useTestStore } from '~/stores/test'
import DpButton from '~/components/ui/DpButton.vue'

export default defineComponent({
  name:"pageA",
  components: { DpInput, DpButton },
  setup() {
    const testValue = ref('')
    const testStore = useTestStore()
    return {
      testValue,
      testStore,
    }
  },
})
</script>
