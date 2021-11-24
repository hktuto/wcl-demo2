import { ref } from '@nuxtjs/composition-api'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const colorMode = ref()
  const baseFontSize = ref('20px')

  const updateGlobalFontSize = (size: string) => {
    baseFontSize.value = size
  }

  return {
    updateGlobalFontSize,
    baseFontSize,
    colorMode,
  }
})
