<template lang="pug">
    page.detail(margin-top)
        nav-bar(slot="nav-bar")
            span(slot="title") 详细资料
            nav-back(slot="left", title="返回",
            @click.native="$router.replace({name: 'contact', query: {mode: 'pop'}})")
        template(slot="main", v-if="user.username")
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
                x-button(:name="user.friendly ? '发消息' : '加好友'", type="button"
                @click="click")
        template(slot="main", v-else)
            .view
                span 用户不存在
</template>

<script>
import { XButton } from 'vux'
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

export default {
    data () {
        return {
            user: {}
        }
    },
    methods: {
        click () {
            if (this.user.friendly) {
                // 跳转到chat界面
                this.$router.replace({
                    name: 'chat',
                    query: {
                        mode: 'push',
                        title: this.user.username
                    }
                })
            }
            else {
                this.$addFriend(this.user.username, err => {
                    if (err) {
                        console.log(err)
                        return
                    }

                    // 发送请求成功
                    console.log('发送请求成功')
                    this.$completed('已发送添加好友请求')
                })
            }

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
        XButton
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.detail {

    .wrap {
        padding: 0 12px;
        margin-top: 20px;
    }

    .view {
        height: 100%;

        color: $lightColor;

        @include flex()
    }
}
</style>
