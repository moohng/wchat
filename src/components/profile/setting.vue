<template>
  <view-box class="setting">
    <x-header slot="header" :left-options="{backText: '我'}">
      <span slot="default">设置</span>
    </x-header>
    <template slot="default">
      <group>
        <cell :is-link="true" title="账号与安全"></cell>
      </group>
      <group>
        <cell :is-link="true" title="新消息通知"></cell>
        <cell :is-link="true" title="隐私"></cell>
        <cell :is-link="true" title="通用"></cell>
      </group>
      <group>
        <cell :is-link="true" title="帮助与反馈"></cell>
        <cell :is-link="true" title="关于微信"></cell>
      </group>
      <group>
        <cell id="logout" title="退出"  @click.native="showActionsheet = true"></cell>
      </group>
      <actionsheet v-model="showActionsheet"
      :show-cancel="true" :menus="actionsheetMenus"
      @on-click-menu-logout="logout"></actionsheet>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell, Actionsheet } from 'vux'

export default {
  data () {
    return {
      showActionsheet: false,
      actionsheetMenus: [
        {
          label: '退出当前账号？<br/><span style="color:#666;font-size:12px;">退出之后需要重新登录</span>',
          type: 'info',
        },
        {
          label: '退出',
          type: 'warn',
          value: 'logout'
        }
      ]
    }
  },
  methods: {
    logout () {
      console.log('退出登录')
    }
  },
  components: {
    ViewBox,
    XHeader,
    Group,
    Cell,
    Actionsheet
  }
}
</script>

<style lang="scss">
#logout .vux-label {
  text-align: center;
}
</style>
