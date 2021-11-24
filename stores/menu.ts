import { ref, useAsync, useContext } from '@nuxtjs/composition-api'
import { defineStore } from 'pinia'
// import { api } from '~/utils/axios';

export const useMenuStore = defineStore('menu', () => {

    // @ts-ignore
    const { $http } = useContext();
    const items = useAsync(async() => {
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