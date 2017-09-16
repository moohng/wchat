<template>
  <li class="chat-dialog">
    <div class="wrap" v-if="date">
      <span class="date">{{ date }}</span>
    </div>
    <div class="wrap content" :class="{reverse}">
      <div class="icon">
        <img :src="message.from.head_icon || head_icon">
      </div>
      <div class="context">
        <p>{{ message.content.text }}</p>
      </div>
    </div>
  </li>
</template>

<script>
import { format } from '../../../utils'

export default {
  data () {
    return {
      head_icon: 'http://iph.href.lu/200x200?text=%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F'
    }
  },
  props: ['message'],
  computed: {
    date () {
      const date = new Date(this.message.date)
      const now = new Date()
      const diff = now - date
      if (diff < 2 * 60 * 1000) return
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
    },
    reverse () {
      const username = sessionStorage.getItem('username')
      return this.message.from.username === username
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

$myColor: #a6ef5d;
$otherColor: #fff;

.chat-dialog {
  min-height: 42px;
  margin: 12px 8px;

  .wrap {
    margin: 8px 0;
    text-align: center;

    .date {
      padding: 4px 8px;

      color: #fff;
      font-size: 70%;

      background: #cecece;
      border-radius: 4px;
    }

    &.content {

      @include flex(flex-start, flex-start)

      .icon {
        margin-right: 8px;
      }
      img {
        width: 38px;
        height: 38px;
      }

      .context {
        position: relative;
        min-height: 22px;
        max-width: calc(100% - 120px);
        padding: 8px 12px;

        text-align: left;
        word-break: break-all;

        // 其他人 对话框背景
        border: 1px solid $lineColor;
        border-radius: 4px;
        background: $otherColor;

        @include flex(flex-start)

        // 指向
        &::after {
          @include abs(14px, auto, auto, -4px)
          content: '';
          width: 8px;
          height: 8px;

          border: 1px solid $lineColor;
          border-top-color: transparent;
          border-right-color: transparent;

          background: $otherColor;
          transform: rotate(45deg);
        }
      }
    }
    // 反向   我的对话框
    &.reverse {
      justify-content: flex-end;

      .context {
        background: $myColor;
      }

      .icon {
        order: 1;
        margin-right: 0;
        margin-left: 8px;
      }
      .context::after {
        left: auto;
        right: -5px;
        background: $myColor;
        transform: rotate(-135deg);
      }
    }
  }
}
</style>
