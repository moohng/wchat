<template lang="pug">
    .message
        search
        tab-group.group
            //- 会话列表
            message-list(v-for="session in sessionList", :session="session",
            @click.native.stop="push(session.title)")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import MessageList from './message-list'
import Search from '@/components/common/search'

import { mapState } from 'vuex'

export default {
    computed: mapState(['sessionList']),
    methods: {
        push (title) {
            // 切换到聊天窗口
            this.$router.replace({
                name: 'chat',
                query: {
                    mode: 'push',
                    title
                }
            })
        }
    },
    mounted () {
        // console.log(this.chatList)
    },
    components: {
        TabGroup,
        MessageList,
        Search
    }
}
</script>

<style lang="scss" scoped>
.message {

    .group:nth-child(2) {
        margin-top: auto;
    }
    .group:last-child {
        margin-bottom: auto;
    }
}
</style>
