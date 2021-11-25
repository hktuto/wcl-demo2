<template>
    <div class="menuContainer">
        <div v-for="item in menuStore.items" :key="item.id" class="menuItem">
            {{ item.label }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '#app'
import { useMenuStore } from '@/stores/menu'
export default defineComponent({
    fetchOnServer:true,
    setup(){
        const menuStore = useMenuStore()

        return{
            menuStore,
        }
    }
})
</script>

<style lang="scss" scoped>

</style>