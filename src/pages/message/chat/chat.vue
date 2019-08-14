<template>
  <view-box class="chat">
    <x-header slot="header">
      <span slot="default">{{ session.name }}</span>
    </x-header>
    <ul slot="default" v-scroll>
      <chat-dialog v-for="message in session.messages" :key="message"
      :message="message"></chat-dialog>
    </ul>
    <chat-bar slot="bottom" @send="send"></chat-bar>
  </view-box>
</template>

<script>
import { ViewBox, XHeader } from 'vux'
import ChatDialog from './chat-dialog'
import ChatBar from './chat-bar'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['sessionList']),
    session () {
      const { index, username } = this.$route.query
      if (username) {
        return {
          name: username,
          members: [username],
          messages: []
        }
      }
      return this.sessionList[index]
    }
  },
  methods: {
    send (text) {
      // 封装消息
      const { id, name, members } = this.session
      const username = sessionStorage.getItem('username')
      const data = {
        session: { id, name, members },
        message: {
          from: { username },
          content: { text },
          date: Date.now()
        }
      }
      // 发送消息
      this.$send(JSON.stringify(data))
      // 保存消息
      this.$store.commit('addMessage', data)
    }
  },
  directives: {
    // 自动滚动
    scroll: {
      bind (el) {
        setTimeout(() => {
          el.parentNode.scrollTop = el.scrollHeight
        }, 1)
      },
      update (el) {
        setTimeout(() => {
          el.parentNode.scrollTop = el.scrollHeight
        }, 1)
      }
    }
  },
  components: {
    ViewBox,
    XHeader,
    ChatDialog,
    ChatBar
  }
}
</script>

