<template lang="pug">
    .message
        search
        tab-group
            message-list(v-for="n in 10", :key="'message-list-' + n",
            @click.native="push('chat')")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import MessageList from './message-list'
import Search from '@/components/common/search'

export default {
    methods: {
        push (to) {
            this.$router.replace({name: to})
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
