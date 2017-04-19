<template lang="pug">
    #app
        //- 全屏切换
        transition(:name="transName", :mode="transMode")
            router-view
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            transName: 'push',
            transMode: ''
        }
    },
    watch: {
        $route (to, from) {
            /**
             * 通过路由路径来判断转场动画的类型
             * 要求路由路径 满足 一定的规则
             */
            const toPath = to.path
            const fromPath = from.path
            if (toPath.startsWith(fromPath)) {
                // push
                console.log('push')
                this.transName = 'push'
                this.transMode = ''
            }
            else if (fromPath.startsWith(toPath)) {
                // pop
                console.log('pop')
                this.transName = 'pop'
                this.transMode = ''
            }
            else if (toPath.includes('wchat')) {
                // dismiss
                console.log('dismiss')
                this.transName = 'dismiss'
                this.transMode = 'in-out'
            }
            else if (fromPath.includes('wchat')) {
                // modal
                console.log('modal')
                this.transName = 'modal'
                this.transMode = 'in-out'
            }
            console.log(toPath, fromPath)
        }
    },
    created () {
        console.log('App created')
    },
    beforeMount () {
        console.log('App beforeMount')
    },
    mounted () {
        console.log('App mounted')
    }
}
</script>

<style lang="scss" scoped>
#app {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #efefef;

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
        opacity: 0;
        transform: translateX(-25%);
    }
    // modal dismiss
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
}
</style>
