<template>
  <div class="profile">
    <group>
      <cell
        :title="'Kevin'"
        :inline-desc="'微信号：mohong668'"
        :link="{ name: 'me' }"
      >
        <img slot="icon" class="icon-hd" :src="icons[0]">
        <img slot="default" class="icon-bd" :src="icons[1]">
      </cell>
    </group>
    <group>
      <cell :is-link="true">
        <span slot="title">{{ titles[0] }}</span>
        <img slot="icon" :src="icons[2]" alt="">
      </cell>
      <cell :is-link="true">
        <span slot="title">{{ titles[1] }}</span>
        <img slot="icon" :src="icons[3]" alt="">
      </cell>
      <cell :is-link="true">
        <span slot="title">{{ titles[2] }}</span>
        <img slot="icon" :src="icons[4]" alt="">
      </cell>
      <cell :is-link="true">
        <span slot="title">{{ titles[3] }}</span>
        <img slot="icon" :src="icons[5]" alt="">
      </cell>
    </group>
    <group>
      <cell :is-link="true">
        <span slot="title">{{ titles[4] }}</span>
        <img slot="icon" :src="icons[6]" alt="">
      </cell>
    </group>
    <group>
      <cell :is-link="true" :link="{name: 'setting'}">
        <span slot="title">{{ titles[5] }}</span>
        <img slot="icon" :src="icons[7]" alt="">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

// 资源文件
import qrcode from './icons/w-profile-qr.svg'
import head from './icons/head-portrait.jpg'

import album from './icons/w-profile-album.svg'
import collection from './icons/w-profile-collection.svg'
import wallet from './icons/w-profile-wallet.svg'
import vip from './icons/w-profile-vip.svg'
import emoj from './icons/w-profile-emoj.svg'
import setting from './icons/w-profile-setting.svg'

import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      icons: [head, qrcode, album, collection, wallet, vip, emoj, setting],
      titles: ['相册', '收藏', '钱包', '卡包', '表情', '设置'],

      user: {
        name: '小莫',
        username: '2b2b2b2b'
      }
    }
  },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    push (to) {
      this.$router.replace({name: to, query: {mode: 'push'}})
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="scss" scoped>
.profile {
  .icon-hd {
    width: 58px;
  }
  .icon-bd {
    width: 28px;
  }
}
</style>
