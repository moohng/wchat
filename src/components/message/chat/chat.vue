<template lang="pug">
    page.chat(margin-bottom)
        nav-bar(slot="nav-bar")
            span.title(slot="title") 标题
            nav-back(slot="left", title="微信",
            @click.native="$router.replace({name: 'message'})")
            .right(slot="right") 占位
        template(slot="content")
            chat-dialog(v-for="(message, index) in messages",
            :value="message", :key="'dialog' + index",
            :ref="index === messages.length - 1 ? 'last' : null")
        chat-input(slot="tab-bar")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import ChatDialog from './chat-dialog'
import ChatInput from './chat-input'

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['messages'])
    },
    updated () {
        console.log(this.$refs['last'][0].$el.offsetTop)
        // this.$refs['last'][0].$el.offsetTop = 100 + 'px'
    },
    components: {
        Page,
        NavBar,
        NavBack,
        ChatDialog,
        ChatInput
    }
}
</script>

<style lang="scss" scoped>

</style>
