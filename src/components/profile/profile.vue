<template>
  <div class="profile">
    <group>
      <cell :is-link="true" :link="{name: 'me', query: {mode: 'push'}}">
        <span slot="title">{{ titles[0] }}</span>
        <img slot="icon" :src="icons[1]" alt="">
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
      <cell :is-link="true" :link="{name: 'setting', query: {mode: 'push'}}">
        <span slot="title">{{ titles[5] }}</span>
        <img slot="icon" :src="icons[7]" alt="">
      </cell>
    </group>
  </div>
        <!-- tab-group
            tab-cell.head(:title="user.name", :subtitle="'微信号: ' + user.username",
            :img="icons[0]", more, disclosure, large,
            @click.native="push('me')")
                img(slot="button", :src="icons[1]") -->
</template>

<script>
import { Group, Cell } from 'vux'

// 资源文件
import qrcode from '@/assets/profile/w-profile-qr.svg'
import head from '@/assets/profile/head-portrait.jpg'

import album from '@/assets/profile/w-profile-album.svg'
import collection from '@/assets/profile/w-profile-collection.svg'
import wallet from '@/assets/profile/w-profile-wallet.svg'
import vip from '@/assets/profile/w-profile-vip.svg'
import emoj from '@/assets/profile/w-profile-emoj.svg'
import setting from '@/assets/profile/w-profile-setting.svg'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      icons: [head, qrcode ,album, collection, wallet, vip, emoj, setting],
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
    Cell,
  }
}
</script>
