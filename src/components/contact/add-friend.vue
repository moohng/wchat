<template lang="pug">
    page.add(margin-top)
        nav-bar(slot="nav-bar")
            span(slot="title") 添加朋友
            nav-back(slot="left", title="通讯录",
            @click.native="$router.replace({name: 'contact', query: {mode: 'pop'}})")
            .search(slot="right", v-if="username.length > 0",
            @click="search") 搜索
        template(slot="main")
            tab-group
                search-cell(v-model="username")
            .wrap
                span 我的微信号：moohng
                img
            tab-group
                tab-cell(v-for="cell in cells",
                :img="cell.img", :title="cell.title", :subtitle="cell.subtitle",
                contact, disclosure)
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'
import SearchCell from './search-cell'

export default {
    data () {
        return {
            username: '',

            cells: [
                {
                    img: '',
                    title: '雷达加朋友',
                    subtitle: '添加身边的朋友'
                },
                {
                    img: '',
                    title: '面对面建群',
                    subtitle: '与身边的朋友进入同一个群聊'
                },
                {
                    img: '',
                    title: '扫一扫',
                    subtitle: '扫描二维码名片'
                },
                {
                    img: '',
                    title: '手机联系人',
                    subtitle: '添加手机通讯录中的朋友'
                },
                {
                    img: '',
                    title: '公众号',
                    subtitle: '获取更多资讯和服务'
                }
            ]
        }
    },
    methods: {
        search () {
            // 搜索好友
        }
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell,
        SearchCell
    }
}
</script>

<style lang="scss" scoped>
.add {

    .wrap {
        margin-bottom: 38px;

        font-size: 90%;

        img {
            display: inline;
            margin-left: 12px;
            vertical-align: middle;

            width: 28px;
            height: 28px;
        }
    }
}
</style>
