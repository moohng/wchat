<template>
  <view-box class="online">
    <x-header slot="header">
      <span slot="title">在线用户</span>
    </x-header>
    <template slot="default" v-if="onlineList.length">
      <group>
        <cell v-for="username in onlineList"
        @click.native.stop="select(username)">
          <span slot="title">{{ username }}</span>
        </cell>
      </group>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell } from 'vux'

export default {
  name: 'online',
  data () {
    return {
      onlineList: []
    }
  },
  methods: {
    select (username) {
      this.$router.replace({
        name: 'chat',
        query: {
          mode: 'push',
          title: username
        }
      })
    }
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

</style>
