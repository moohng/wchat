<template>
  <view-box class="me">
    <w-header slot="header" backText="我">个人信息</w-header>
    <group>
      <cell title="头像" is-link>
        <img class="head-icon" :src="headIcon">
      </cell>
      <cell title="昵称" is-link>{{ name }}</cell>
      <cell title="微信号" is-link>{{ username }}</cell>
      <cell title="二维码名片" is-link></cell>
      <cell title="更多" :link="{ name: 'more' }"></cell>
    </group>
    <group>
      <cell title="我的地址" is-link></cell>
    </group>
  </view-box>
</template>

<script>
import { ViewBox, Group, Cell } from 'vux'
import { WHeader } from '@/components/wx'
import { mapGetters } from 'vuex'

export default {
  name: 'me',
  computed: {
    ...mapGetters('profile', ['name', 'username', 'headIcon'])
  },
  components: {
    ViewBox,
    WHeader,
    Group,
    Cell
  }
}
</script>

<style lang="scss" scoped>
.me {
  .head-icon {
    width: 48px;
    height: 48px;
  }
}
</style>
