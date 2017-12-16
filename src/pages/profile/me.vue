<template>
  <view-box class="me">
    <x-header slot="header" :left-options="{ backText: '我' }">
      <span slot="default">个人信息</span>
    </x-header>
    <template slot="default">
      <group>
        <cell title="头像" is-link>
          <img slot="default" class="icon-bd" :src="headIcon">
        </cell>
        <cell title="昵称" is-link>{{ name }}</cell>
        <cell title="微信号" is-link>{{ username }}</cell>
        <cell title="二维码名片" is-link></cell>
        <cell title="更多" is-link></cell>
      </group>
      <group>
        <cell title="我的地址" is-link></cell>
      </group>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'me',
  computed: {
    ...mapGetters('profile', ['name', 'username', 'headIcon'])
  },
  components: {
    ViewBox,
    XHeader,
    Group,
    Cell
  }
}
</script>

<style lang="scss" scoped>
.me {
  .icon-bd {
    width: 48px;
    height: 48px;
  }
}
</style>
