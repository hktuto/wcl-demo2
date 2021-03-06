import { ref } from '#app'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  // const colorMode = ref()
  const baseFontSize = ref('20px')

  const updateGlobalFontSize = (size: string) => {
    baseFontSize.value = size
  }

  return {
    updateGlobalFontSize,
    baseFontSize,
  }
  
})
