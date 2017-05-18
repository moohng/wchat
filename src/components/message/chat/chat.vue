<template lang="pug">
    page.chat(margin-bottom)
        nav-bar(slot="nav-bar")
            span.title(slot="title") {{ name }}
            nav-back(slot="left", title="微信",
            @click.native="$router.replace({name: 'message', query: {mode: 'pop'}})")
            span(slot="right") 占位
        ul.mm(slot="main", v-scroll="messages")
            chat-dialog(v-for="(message, index) in messages", :date="date(index)",
            :message="message", :key="'dialog' + index",
            :ref="index === messages.length - 1 ? 'last' : null")
        chat-bar(slot="tab-bar")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import ChatDialog from './chat-dialog'
import ChatBar from './chat-bar'

export default {
    computed: {
        name () {
            return this.$store.state.chatLog[0].name
        },
        messages () {
            // 始终获取第一条消息列表
            return this.$store.state.chatLog[0].messages
        },

    },
    methods: {
        date (index) {
            if (index >= 1) {
                // 判断是否显示时间 先将就着用吧
                const time = this.messages[index].time.substr(3, 2)
                const lastTime = this.messages[index - 1].time.substr(3, 2)
                return time - lastTime > 0
            }
            return false
        }
    },
    directives: {
        // todo ...
        scroll: {
            bind (el) {
                setTimeout(() => {
                    el.parentNode.scrollTop = el.scrollHeight
                }, 1)
            },
            update (el) {
                setTimeout(() => {
                    el.parentNode.scrollTop = el.scrollHeight
                }, 1)
            }
        }
    },
    components: {
        Page,
        NavBar,
        NavBack,
        ChatDialog,
        ChatBar
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';


</style>
