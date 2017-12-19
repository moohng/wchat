<template>
  <div class="contact">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <cell title="聊天室" @click.native="$router.push({ name: 'chat' })"></cell>
      <cell title="在线用户" @click.native="$router.push({ name: 'online' })"></cell>
    </group>
    <group>
      <cell
        v-for="{ username, name, headIcon } in userContact"
        :key="username"
        :title="name"
        @click.native="detail(username)"
      >
        <img slot="icon" class="head-icon" :src="headIcon" alt="head-icon">
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'
import { mapGetters } from 'vuex'
import HeaderRight from './header-right'

export default {
  name: 'contact',
  computed: {
    ...mapGetters('contact', ['userContact'])
  },
  methods: {
    detail (username) {
      this.$router.push({
        name: 'detail',
        query: {
          username
        }
      })
    }
  },
  components: {
    Group,
    Cell,
    Search
  },
  created () {
    this.$store.dispatch('contact/fetchUserContact')
  },
  HeaderRight
}
</script>

<style lang="scss" scoped>
img.head-icon {
  width: 32px;
  height: 32px;
}
</style>
