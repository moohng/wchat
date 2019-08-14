<template>
  <div class="profile">
    <group>
      <cell
        class="profile-head"
        :title="name"
        :inline-desc="username | prefix"
        :link="{ name: 'me' }"
      >
        <div slot="icon" class="profile-head-icon">
          <img :src="headIcon" alt="headIcon">
        </div>
        <img slot="default" class="profile-head-qr" src="./icons/w-profile-qr.svg">
      </cell>
    </group>
    <group>
      <cell is-link>
        <span slot="title">钱包</span>
        <img slot="icon" src="./icons/w-profile-wallet.svg" alt="wallet">
      </cell>
    </group>
    <group>
      <cell is-link>
        <span slot="title">收藏</span>
        <img slot="icon" src="./icons/w-profile-collection.svg" alt="collection">
      </cell>
      <cell is-link>
        <span slot="title">相册</span>
        <img slot="icon" src="./icons/w-profile-album.svg" alt="album">
      </cell>
      <cell is-link>
        <span slot="title">卡包</span>
        <img slot="icon" src="./icons/w-profile-vip.svg" alt="vip">
      </cell>
      <cell is-link>
        <span slot="title">表情</span>
        <img slot="icon" src="./icons/w-profile-emoji.svg" alt="emoji">
      </cell>
    </group>
    <group>
      <cell :link="{ name: 'setting' }">
        <span slot="title">设置</span>
        <img slot="icon" src="./icons/w-profile-setting.svg" alt="setting">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters('profile', ['name', 'username', 'headIcon'])
  },
  filters: {
    prefix (username) {
      return username && `微信号：${username}`
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>

<style lang="scss" scoped>
.profile-head {
  &-icon {
    margin-right: 8px;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    overflow: hidden;
    img { width: 100%; }
  }
  &-qr {
    width: 28px;
    height: 28px;
  }
}
</style>
