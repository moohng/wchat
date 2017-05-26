<template lang="pug">
    .contact
        search
        tab-group.group
            tab-cell(v-for="title, index in titles",
            img="", :title="title", contact,
            @click.native.stop="tabSelect(index)")
        tab-group.group(v-for="group in friendList")
            tab-cell(v-for="friend in group",
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
            titles: ['聊天室', '在线用户'],
        }
    },
    computed: {
        ...mapGetters(['friendList'])
    },
    methods: {
        tabSelect (index) {
            switch (index) {
                case 0:
                    this.$router.replace({
                        name: 'chat',
                        query: {
                            mode: 'push',
                            title: '聊天室'
                        }
                    })
                    break
                case 1:
                    this.$router.replace({
                        name: 'online',
                        query: {
                            mode: 'push'
                        }
                    })
                    break
                default:
            }

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
