<template>
  <Input
    v-bind="$props"
    ref="input"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @clear="$emit('clear', $event)"
  >
    <slot slot="prefix" name="prefix"></slot>
    <slot slot="suffix" name="suffix"></slot>
    <slot slot="prepend" name="prepend"></slot>
    <slot slot="append" name="append"></slot>
  </Input>
</template>

<script lang="ts">
import { defineComponent, ref } from '#app'

import { Input } from 'element-ui'

export default defineComponent({
  components: { Input },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: [
    'size',
    'type',
    'value',
    'maxlength',
    'minlength',
    'show-word-limit',
    'placeholder',
    'clearable',
    'show-password',
    'disabled',
    'prefix-icon',
    'suffix-icon',
    'rows',
    'autosize',
    'autocomplete',
    'name',
    'readonly',
    'max',
    'min',
    'step',
    'resize',
    'autofocus',
    'form',
    'label',
    'tabindex',
    'validate-event',
  ],
  setup() {
    const input = ref<any>()
    const focus = () => {
      return input?.value.focus()
    }
    return {
      input,
      focus,
    }
  },
})
</script>

<style lang="scss">
@import '~/assets/style/variable.scss';
@import '~element-ui/packages/theme-chalk/src/input';
</style>
