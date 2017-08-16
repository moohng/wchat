<template>
 <div id="app">
   <transition :name="transName" :mode="transMode">
     <router-view></router-view>
   </transition>
 </div>
</template>

<script>
// web socket
import ws from '@/websocket'

export default {
  data () {
    return {
      transName: 'push',
      transMode: ''
    }
  },
  watch: {
    $route (to) {
      const mode = to.query.mode
      switch (mode) {
        case 'push':
          this.transName = 'push'
          this.transMode = ''
          break
        case 'pop':
          this.transName = 'pop'
          this.transMode = ''
          break
        case 'modal':
          this.transName = 'modal'
          this.transMode = 'in-out'
          break
        case 'dismiss':
          this.transName = 'dismiss'
          this.transMode = 'in-out'
          break
        case 'turn':
          this.transName = 'turn'
          this.transMode = 'out-in'
          break
        default:
          this.transName = 'fade'
          this.transMode = 'out-in'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100vw;
  height: 100vh;

  // 字体
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;

  background: #000;

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
