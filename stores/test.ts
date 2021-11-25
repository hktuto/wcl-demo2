import { ref } from '#app'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', () => {
  const counter = ref(0)
  return {
    counter,
  }
})
