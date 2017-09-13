<template>
  <div class="message">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <cell v-for="session in sessionList"
        :title="session.name"
        @click.native.stop="$router.push({name: 'chat'})">
        <img slot="icon" src="" class="cell-hd__icon">
        <span slot="inline-desc" class="cell-desc">{{ session | lastMessage | messageText }}</span>
        <span slot="default" class="cell-time">{{ session | lastMessage | messageTime }}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'
import { mapState } from 'vuex'
import { format } from '../../utils'

export default {
  name: 'message',
  computed: mapState(['sessionList']),
  filters: {
    lastMessage (session) {
      const len = session.messages.length
      return session.messages[len - 1]
    },
    messageText: message => message.content.text,
    messageTime (message) {
      const date = new Date(message.date)
      const messageDay = format(date, 'dd')
      const nowDay = format(new Date(), 'dd')
      let time
      switch (nowDay - messageDay) {
        case 0:
          time: format(date, 'hh:mm')
          break
        case 1:
          time: '昨天'
          break
        case 2:
          time: '前天'
          break
        default:
          time: format(date, 'MM月dd日')
      }
      return time
    }
  },
  components: {
    Group,
    Search,
    Cell
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.message {
  .cell-hd__icon {
    width: 48px; height: 48px;
    border: 1px solid #000;
  }
  .cell-desc { @include textHidden }
  .cell-time {
    position: absolute;
    right: 15px; top: 15px;
    font-size: 12px;
  }
}
</style>
