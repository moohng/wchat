<template lang="pug">
    .message
        search
        tab-group.group
            //- 消息列表数 取决于聊天记录数组的长度
            message-list(v-for="list, key in chatList", :data="list", :key="key",
            @click.native="push(key)")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import MessageList from './message-list'
import Search from '@/components/common/search'

import { mapState } from 'vuex'

export default {
    computed: mapState(['chatList']),
    methods: {
        push (key) {
            // 切换到聊天窗口
            this.$router.replace({
                name: 'chat',
                query: {
                    mode: 'push',
                    session: key
                }
            })
        }
    },
    mounted () {
        console.log(this.chatList)
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
