<template lang="pug">
    page.chat(margin-bottom)
        nav-bar(slot="nav-bar")
            span.title(slot="title") 标题
            nav-back(slot="left", title="微信",
            @click.native="$store.commit('pop')")
            .right(slot="right") 占位
        template(slot="content")
            chat-dialog(reverse)
            chat-dialog
            chat-dialog(date="星期六 13:08")
            chat-dialog
            chat-dialog(reverse)
            chat-dialog
            chat-dialog(reverse)
        chat-input(slot="tab-bar")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import ChatDialog from './chat-dialog'
import ChatInput from './chat-input'

export default {
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
