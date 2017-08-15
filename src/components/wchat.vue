<template>
  <view-box class="wchat">
    <x-header slot="header" :left-options="{showBack: false}">
      <span slot="default">{{ titleList[pageIndex] }}</span>
      <div slot="right" @click="add" v-if="pageIndex < 2">添加</div>
    </x-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar slot="bottom" v-model="pageIndex">
      <tabbar-item v-for="tab in tabbar" :link="tab.to">
        <component :is="tab.icon" slot="icon"></component>
        <span slot="label">{{ tab.title }}</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem } from 'vux'

// SVG 图标
import IconWchat from '@/components/icon/wchat'
import IconContact from '@/components/icon/contact'
import IconExplore from '@/components/icon/explore'
import IconProfile from '@/components/icon/profile'

export default {
  data () {
    return {
      pageIndex: 0,
      titleList: ['微信', '通讯录', '发现', '我'],
      tabbar: [
        {
          title: '微信',
          icon: 'icon-wchat',
          to: {name: 'message'}
        },
        {
          title: '通讯录',
          icon: 'icon-contact',
          to: {name: 'contact'}
        },
        {
          title: '发现',
          icon: 'icon-explore',
          to: {name: 'explore'}
        },
        {
          title: '我',
          icon: 'icon-profile',
          to: {name: 'profile'}
        }
      ]
    }
  },
  mounted () {
    // 设置导航
    this.pageIndex = ['message', 'contact', 'explore', 'profile']
                    .findIndex(value => value === this.$route.name)
  },
  updated () {
    // 设置导航
    this.pageIndex = ['message', 'contact', 'explore', 'profile']
                    .findIndex(value => value === this.$route.name)
  },
  methods: {
    add () {
      this.$router.replace({
        name: 'add',
        query: {
          mode: 'push'
        }
      })
    }
  },
  components: {
    ViewBox,
    XHeader,
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
