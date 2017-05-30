<template lang="pug">
    page.detail(margin-top)
        nav-bar(slot="nav-bar")
            span(slot="title") 详细资料
            nav-back(slot="left", title="返回",
            @click.native="$router.replace({name: 'contact', query: {mode: 'pop'}})")
        template(slot="main")
            tab-group
                tab-cell(img="", :title="user.name", :subtitle="'微信号：' + user.username", large)
            tab-group
                tab-cell(title="设置备注和标签", disclosure)
            tab-group
                tab-cell(title="地区", detail="广东 深圳")
                tab-cell(title="个人相册", detail="对不起，我还没准备好", large, disclosure)
                tab-cell(title="更多", disclosure)
            //- 按钮
            .wrap
                w-button(:name="user.friendly ? '发消息' : '加好友'", type="button"
                @click="user.friendly ? chat : add")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'
import WButton from '@/components/wellcome/w-button'

export default {
    data () {
        return {
            user: {}
        }
    },
    methods: {
        chat () {

        },

        add () {

        }
    },
    mounted () {
        // 获取用户信息列表
        const username = this.$route.query.username
        this.$search(username, (err, user) => {
            if (err) {
                console.log(err)
                return
            }

            this.user = user
        })
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell,
        WButton
    }
}
</script>

<style lang="scss" scoped>
.detail {

    .wrap {
        padding: 0 12px;
        margin-top: 20px;
    }
}
</style>
