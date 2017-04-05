<template lang="pug">
    #app
        //- 全屏切换
        transition(:name="transName")
            router-view
</template>

<script>
import { mapState } from 'vuex'

export default {
    data () {
        return {
            // transName: 'push'
        }
    },
    computed: {
        ...mapState({
            transName: state => state.pushOrPop
        })
    },
    watch: {
        '$route' (to, from) {
            // console.log(to.name, from.name)
            // 待续 ...
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #efeff4;

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
}
</style>
