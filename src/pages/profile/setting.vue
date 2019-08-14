<template>
  <view-box class="setting">
    <w-header slot="header" backText="我">设置</w-header>
    <group>
      <cell title="新消息通知" is-link></cell>
      <cell title="勿扰模式" is-link></cell>
      <cell title="聊天" is-link></cell>
      <cell title="隐私" is-link></cell>
      <cell title="通用" is-link></cell>
      <cell title="账号与安全" is-link></cell>
    </group>
    <group>
      <cell title="关于微信" is-link></cell>
      <cell title="帮助与反馈" is-link></cell>
    </group>
    <group>
      <cell title="插件" is-link></cell>
    </group>
    <group>
      <cell-box class="cell-logout" @click.native="showActionsheet = true">退出</cell-box>
    </group>
    <actionsheet
      show-cancel
      v-model="showActionsheet"
      :menus="actionsheetMenus"
      @on-click-menu-logout="logout"
    ></actionsheet>
  </view-box>
</template>

<script>
import { ViewBox, Group, Cell, CellBox, Actionsheet } from 'vux'
import { WHeader } from '@/components/wx'

export default {
  name: 'setting',
  data () {
    return {
      showActionsheet: false,
      actionsheetMenus: [
        {
          label: '退出当前账号？<br/><span style="color:#666;font-size:12px;">退出之后需要重新登录</span>',
          type: 'info'
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
      console.log('退出')
    }
  },
  components: {
    ViewBox,
    WHeader,
    Group,
    Cell,
    CellBox,
    Actionsheet
  }
}
</script>

<style lang="scss">
.cell-logout {
  justify-content: center;
}
</style>
