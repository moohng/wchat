<template lang="pug">
    page.wchat(margin-bottom)
        nav-bar(slot="nav-bar")
            span(slot="title") {{ titleList[pageIndex] }}
            .add(slot="right", @click="add", v-if="pageIndex < 2") 添加
        //- tab bar 切换在这里   (嵌套路由)
        template(slot="main")
            transition(name="fade", mode="out-in")
                router-view
        tab-bar(slot="tab-bar")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import TabBar from '@/components/common/tab-bar'

export default {
    data () {
        return {
            pageIndex: 0,
            titleList: ['微信', '通讯录', '发现', '我']
        }
    },
    mounted () {
        // 设置导航
        this.pageIndex = ['message', 'contact', 'explore', 'profile']
                        .findIndex(value => value === this.$route.name)
    },
    updated () {
        // 设置导航
        this.pageIndex = ['message', 'contact', 'explore', 'profile']
                        .findIndex(value => value === this.$route.name)
    },
    methods: {
        add () {
            this.$router.replace({
                name: 'add',
                query: {
                    mode: 'push'
                }
            })
        }
    },
    components: {
        Page,
        NavBar,
        TabBar
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixin';

.wchat {

    // 动画效果 平缓切换
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
