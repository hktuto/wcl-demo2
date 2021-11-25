import { defineStore } from 'pinia'
import { ref, useLazyAsyncData, useNuxtApp } from '#app'
// import { api } from '~/utils/axios';

export const useMenuStore = defineStore('menu', () => {

    // @ts-ignore
    const { $http } = useNuxtApp()
    const {data:items} = useLazyAsyncData( 'menuitems', async() => {
        const res = await $http.$get('/api/menu')
        return res.data
    })

    const loading = ref(false);

    const errorMessage = ref('');


    return {
        loading,
        errorMessage,
        items
    }
})