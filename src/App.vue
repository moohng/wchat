<template lang="pug">
    #app
        //- 全屏切换
        transition(:name="transName", :mode="transMode")
            router-view
</template>

<script>
// web socket
import ws from '@/websocket'

import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            transName: 'push',
            transMode: ''
        }
    },
    computed: {
        ...mapGetters(['account'])
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
                default:
                    this.transName = 'fade',
                    this.transMode = ''
            }
        }
    },
    created () {
        // console.log('App created')
    },
    beforeMount () {
        // console.log('App beforeMount')
    },
    mounted () {
        // 重新加载时，判断用户是否存在
        if (this.account) {
            // 存在   连接socket
            const url = 'ws://23.105.193.214:3000/ws?username=' + this.account
            ws.init(url)
        }
        else {
            // 不存在  转到登录界面
            this.$router.replace({
                name: 'login',
                query: {
                    mode: 'dismiss'
                }
            })
        }

    }
}
</script>

<style lang="scss" scoped>
#app {
    position: relative;
    width: 100%;
    height: 100%;

    // 字体
    font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;

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
        opacity: 0.6;
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
    // 3. fade
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .12s ease-out;
    }
}
</style>
