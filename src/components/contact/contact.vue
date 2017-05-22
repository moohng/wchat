<template lang="pug">
    .contact
        search
        tab-group.group
            tab-cell(v-for="title, index in titles",
            img="", :title="title", contact,
            @click.native.stop="tabSelect(title)")
        tab-group.group(v-for="group, g in friendList")
            tab-cell(v-for="friend, f in group",
            img="", :title="friend", contact,
            @click.native.stop="tabSelect(friend)")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'
import Search from '@/components/common/search'

import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            // 固定组件
            titles: ['聊天室', '群聊'],
        }
    },
    computed: {
        ...mapGetters(['friendList'])
    },
    methods: {
        tabSelect (title) {
            this.$router.replace({
                name: 'chat',
                query: {
                    mode: 'push',
                    title
                }
            })
        }
    },
    components: {
        TabGroup,
        TabCell,
        Search
    }
}
</script>

<style lang="scss" scoped>
.contact {

    .group:nth-child(2) {
        margin-top: auto;
    }
}
</style>
