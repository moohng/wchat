<template>
  <div class="message">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <message-list v-for="session in sessionList" :session="session" @click.native.stop="push(session.title)"></message-list>
    </group>
  </div>
</template>

<script>
import { Search, Group } from 'vux'
import MessageList from './message-list'

import { mapState } from 'vuex'

export default {
  computed: mapState(['sessionList']),
  methods: {
    push (title) {
      // 切换到聊天窗口
      this.$router.replace({
        name: 'chat',
        query: {
          mode: 'push',
          title
        }
      })
    }
  },
  components: {
    Group,
    MessageList,
    Search
  }
}
</script>

<style lang="scss" scoped>
.message {

}
</style>
