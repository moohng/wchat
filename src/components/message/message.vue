<template lang="pug">
    .message
        search
        tab-group
            message-list(@click.native="push('chat')")
            message-list
            message-list
            message-list
            message-list
            message-list
            message-list
            message-list
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import MessageList from './message-list'
import Search from '@/components/common/search'

export default {
    methods: {
        push (to) {
            this.$store.commit('push', {to, from: 'message'})
        }
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
