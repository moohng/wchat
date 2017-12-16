<template>
  <view-box class="more">
    <w-header slot="header" backText="个人信息">更多信息</w-header>
    <group>
      <cell title="性别" is-link>{{ sex }}</cell>
      <cell title="地区" is-link>{{ address }}</cell>
      <cell title="个性签名" is-link>{{ aboutMe }}</cell>
    </group>
  </view-box>
</template>

<script>
import { ViewBox, Group, Cell } from 'vux'
import { WHeader } from '@/components/wx'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('profile', ['sex', 'address', 'aboutMe'])
  },
  components: {
    ViewBox,
    WHeader,
    Group,
    Cell
  }
}
</script>
