<template lang="pug">
    page.wchat(margin-bottom)
        nav-bar(slot="nav-bar")
            .title(slot="title") {{ titleList[pageIndex] }}
            .add(slot="right", v-if="pageIndex === 0",
             @click="add") 添加
            .add-friend(slot="right", v-if="pageIndex === 1",
             @click="addFriend") 添加朋友
        //- tab bar 切换在这里   (嵌套路由)
        template(slot="content")
            transition(name="fade", mode="out-in")
                router-view
        tab-bar(slot="tab-bar")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import TabBar from '@/components/common/tab-bar'

import { mapState } from 'vuex'

export default {
    data () {
        return {
            pageIndex: 0
        }
    },
    computed: {
        ...mapState(['titleList'])
    },
    components: {
        Page,
        NavBar,
        TabBar
    },
    watch: {
        $route (to, from) {
            // 设置导航
            this.pageIndex = ['message', 'contact', 'explore', 'profile']
            .findIndex(value => value === to.name)
        }
    },
    methods: {
        add () {
            console.log('add')
        },
        addFriend () {
            console.log('addFriend')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixin';

.wchat {

    .content {

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
}
</style>
