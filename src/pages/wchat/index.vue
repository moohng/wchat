<template>
  <view-box class="wchat">
    <w-header slot="header">
      <span>{{ title }}</span>
      <router-view slot="right" name="header-right"></router-view>
    </w-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <tabbar slot="bottom" :value="pageIndex">
      <tabbar-item :link="{ name: 'message' }">
        <icon-wchat slot="icon"></icon-wchat>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item :link="{ name: 'contact' }">
        <icon-contact slot="icon"></icon-contact>
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item :link="{ name: 'explore' }">
        <icon-explore slot="icon"></icon-explore>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item :link="{ name: 'profile' }">
        <icon-profile slot="icon"></icon-profile>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux'
import { WHeader } from '@/components/wx'
// SVG 图标
import IconWchat from './icons/wchat'
import IconContact from './icons/contact'
import IconExplore from './icons/explore'
import IconProfile from './icons/profile'

export default {
  name: 'wchat',
  computed: {
    title () {
      return this.$route.meta.title
    },
    pageIndex () {
      return this.$route.meta.tabIndex
    }
  },
  components: {
    ViewBox,
    WHeader,
    Tabbar,
    TabbarItem,

    IconWchat,
    IconContact,
    IconExplore,
    IconProfile
  }
}
</script>

<style lang="scss" scoped>
.wchat {
  // 动画效果 平缓切换
  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .12s ease-out;
  }
}
</style>
