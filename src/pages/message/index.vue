<template>
  <div class="message">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <cell
        v-for="(session, index) in sessionList"
        :key="session.id"
        :title="session.name"
        @click.native.stop="$router.push({ name: 'chat' , query: { index } })"
      >
        <img slot="icon" :src="session.head_icon || head_icon" class="cell-hd__icon">
        <span slot="inline-desc" class="cell-desc">{{ session | lastMessage | messageText }}</span>
        <span slot="default" class="cell-time">{{ session | lastMessage | messageTime }}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'
import { mapState } from 'vuex'
import HeaderRight from './header-right'
import { format } from '../../utils'

export default {
  name: 'message',
  data () {
    return {
      head_icon: 'http://iph.href.lu/200x200?text=%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F'
    }
  },
  computed: mapState(['sessionList']),
  filters: {
    lastMessage (session) {
      const len = session.messages.length
      return session.messages[len - 1]
    },
    messageText: message => message.content.text,
    messageTime (message) {
      const date = new Date(message.date)
      const now = new Date()
      const diff = now - date
      const day = 24 * 60 * 60 * 1000
      let time
      if (diff < day && date.getDate() === now.getDate()) { // 今天
        time = format(date, 'hh:mm')
      } else if (diff > day && diff < 2 * day && date.getDate() === now.getDate() + 1) {  // 昨天
        time = '昨天'
      } else if (diff > 2 * day) {
        time = format(date, 'MM月dd日')
      }
      return time
    }
  },
  components: {
    Group,
    Search,
    Cell
  },
  HeaderRight
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin';

.message {
  .cell-hd__icon {
    width: 48px; height: 48px;
  }
  .cell-desc { @include textHidden }
  .cell-time {
    position: absolute;
    right: 15px; top: 15px;
    font-size: 12px;
  }
}
</style>
