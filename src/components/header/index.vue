<template>
  <x-header v-if="!inWeiXin()" :left-options="leftOptions">
    <slot>{{ title }}</slot>
    <slot slot="right" name="right"></slot>
  </x-header>
</template>

<script>
import { XHeader } from 'vux'
import { inWeiXin } from '../../utils/browser'

export default {
  name: 'w-header',
  props: {
    title: String,
    backText: String
  },
  computed: {
    leftOptions () {
      const backText = this.backText
      return {
        backText,
        showBack: !!backText
      }
    }
  },
  methods: {
    inWeiXin
  },
  components: {
    XHeader
  }
}
</script>
