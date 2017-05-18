<template lang="pug">
    page.chat(margin-bottom)
        nav-bar(slot="nav-bar")
            span.title(slot="title") {{ name }}
            nav-back(slot="left", title="微信",
            @click.native="$router.replace({name: 'message', query: {mode: 'pop'}})")
            span(slot="right") 占位
        ul(slot="main", v-scroll="messages")
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

import { mapState } from 'vuex'

export default {
    data () {
        return {
            name: '',
            messages: []
        }
    },
    computed: {
        ...mapState (['chatList'])

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
    mounted () {
        const key = this.$route.query.session
        const list = this.chatList[key]
        if (list) {
            this.name = list.name
            this.messages = list.messages
        }
        else {
            this.name = key
            this.$store.commit('addList', key)
        }

    },
    directives: {
        // 自动滚动
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

