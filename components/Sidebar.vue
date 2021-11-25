<template>
  <div :class="{ sidebarContainer: true, expanded }">
    <Logo class="logo" :mode="expanded ? 'withName' : 'iconOnly'" />
    <Menu />
    <div class="expand" @click="expanded = !expanded">
      <DpIcon :name=" expanded ? 's-fold' : 's-unfold'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '#app'
import Logo from '@/components/Logo.vue'
import DpIcon from '@/components/ui/DpIcon.vue'
import Menu from '@/components/Menu.vue'
export default defineComponent({
  components: { Logo, DpIcon, Menu },
  setup() {
    const expanded = ref(false)
    return {
      expanded,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebarContainer {
  width: 60px;
  // height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  background: var(--sidebar-background);
  padding: var(--app-padding) ;
  transition: width 0.2s ease-in-out;
  color: var(--sidebar-color);
  position: relative;
  &.expanded{
    width: 150px;
  }
  @media (max-width: 640px){
    width: 100%;
    // height: 60px;
    grid-template-rows: auto;
    grid-template-columns: 60px 1fr 60px;
  }
}
.logo {
  width: 100%;
  // height: 60px;
  display: grid;
  justify-content: center;
}
.expand {
  font-size: 32px;
  
}
</style>
