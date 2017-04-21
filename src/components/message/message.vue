<template lang="pug">
    .message
        search
        tab-group
            //- 消息列表数 取决于聊天记录数组的长度
            message-list(v-for="n in chatLog.length",
            :key="'message-list-' + n", :index="n - 1",
            @click.native="push('chat', n - 1)")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import MessageList from './message-list'
import Search from '@/components/common/search'

import { mapState } from 'vuex'

export default {
    computed: mapState(['chatLog']),
    methods: {
        push (to, index) {
            // 改变当前 列表到最前端
            this.$store.commit('updateChatLog', index)
            // 切换到聊天窗口
            this.$router.replace({ name: to })
        }
    },
    mounted () {
        // 接收到用户信息
        console.log(this.$route.params)
    },
    components: {
        TabGroup,
        MessageList,
        Search
    }
}
</script>

<style lang="scss" scoped>

</style>
