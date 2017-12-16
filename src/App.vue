<template>
  <div class="app">
    <transition :name="transName" :mode="transMode">
      <router-view></router-view>
    </transition>
    <loading v-model="loading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
import * as api from './services/api'
import * as types from './store/mutation-types'

export default {
  name: 'app',
  data () {
    return {
      transName: 'push',
      transMode: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => !!state.loading,
      invalidResponse: state => state.invalidResponse
    })
  },
  async mounted () {
    // 获取当前用户信息（鉴权）
    try {
      const data = await this.$get(api.fetchUserInfo)
      this.$store.commit(types.SAVE_USER_INFO, { userInfo: data })
    } catch (err) {
      console.log('err', err)
    }
  },
  watch: {
    invalidResponse (val, old) {
      const { code, msg } = val
      if (code === 100001) {
        this.$toast('未登录')
        this.$router.replace({ name: 'login' })
      }
      console.log(msg || '数据异常')
    },
    $route (to, from) {
      if (!from.name) {
        this.transName = 'fade'
        this.transMode = 'out-in'
        return
      }
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      const mode = to.query.mode
      if (mode === 'modal') {
        this.transName = 'modal'
        this.transMode = 'in-out'
      } else if (mode === 'dismiss') {
        this.transName = 'dismiss'
        this.transMode = 'in-out'
      } else if (mode === 'turn') {   // 翻转
        this.transName = 'turn'
        this.transMode = 'out-in'
      } else if (toDepth > fromDepth || mode === 'push') {
        this.transName = 'push'
        this.transMode = ''
      } else if (toDepth < fromDepth || mode === 'pop') {
        this.transName = 'pop'
        this.transMode = ''
      } else {
        this.transName = 'fade'
        this.transMode = 'out-in'
      }
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 100vw;
  height: 100vh;

  // 字体
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  // background: #000;

  // 防止某些浏览器 切换界面时出现滚动条
  overflow: hidden;
  cursor: default;

  // 转场动画
  // -------------------
  // 1. push pop
  .push-enter,
  .pop-leave-active {
      // 位于顶层
      z-index: 10;
      transform: translateX(100%);
  }
  .push-enter-active,
  .pop-leave-active {
      transition: transform .3s ease-out;
  }
  .push-leave-active,
  .pop-enter-active {
      transition: transform .3s ease-out,
                  opacity .3s ease-out;
  }
  .push-leave-active,
  .pop-enter {
      opacity: 0.8;
      transform: translateX(-25%);
  }
  // 2. modal dismiss
  .modal-enter,
  .dismiss-leave-active {
      transform: translateY(100%);
  }
  .modal-enter-active,
  .dismiss-leave-active {
      transition: transform .3s ease-out;
      // 位于最顶层
      z-index: 1000;
  }
  .modal-leave-active,
  .dismiss-enter-active {
      // 位于最底层
      z-index: -1;
  }
  // 3. fade 淡入淡出
  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .12s ease-out;
  }
  // 4. turn 翻转
  .turn-enter,
  .turn-leave-active {
      transform: rotateY(-90deg) scale(.9);
  }
  .turn-enter-active,
  .turn-leave-active {
      transition: transform .3s ease-out;
  }
}
</style>
