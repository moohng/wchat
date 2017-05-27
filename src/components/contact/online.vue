<template lang="pug">
    page.online(margin-top)
        nav-bar(slot="nav-bar")
            span(slot="title") 在线用户
            nav-back(slot="left", title="通讯录",
            @click.native="$router.replace({name: 'contact', query: {mode: 'pop'}})")
        template(slot="main", v-if="onlineList.length > 0")
            tab-group
                tab-cell(v-for="username in onlineList",
                img="", :title="username", contact,
                @click.native.stop="select(username)")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

export default {
    name: 'online',
    data () {
        return {
            onlineList: []
        }
    },
    methods: {
        select (username) {
            this.$router.replace({
                name: 'chat',
                query: {
                    mode: 'push',
                    title: username
                }
            })
        }
    },
    mounted () {
        // 获取在线用户
        this.$getOnline((err, onlineList) => {
            if (err) {
                console.log(err)
                return
            }

            this.onlineList = onlineList
        })
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell
    }
}
</script>

<style lang="scss" scoped>

</style>
