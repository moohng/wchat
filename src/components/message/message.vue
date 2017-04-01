<template lang="pug">
    .message
        search
        tab-group
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
            wchat-list
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import WchatList from './wchat-list'
import Search from '@/components/common/search'

export default {
    components: {
        TabGroup,
        WchatList,
        Search
    }
}
</script>

<style lang="scss" scoped>

</style>
