<template lang="pug">
    .contact
        search
        tab-group.group
            tab-cell(v-for="title, index in titles",
            img="", :title="title", contact,
            @click.native.stop="tabSelect(index)")
        tab-group.group
            tab-cell(img="", :title="friends[0]", contact)
            tab-cell(img="", :title="friends[1]", contact)
        tab-group.group
            tab-cell(img="", :title="friends[2]", contact)
            tab-cell(img="", :title="friends[3]", contact)
            tab-cell(img="", :title="friends[4]", contact)
        tab-group.group
            tab-cell(img="", :title="friends[5]", contact)
        tab-group.group
            tab-cell(img="", :title="friends[6]", contact)
            tab-cell(img="", :title="friends[7]", contact)
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'
import Search from '@/components/common/search'

export default {
    data () {
        return {
            // 固定组件
            titles: ['聊天室', '群聊', '标签', '公众号'],
            // 朋友列表 服务器获取
            friends: ['张三', '小明', '小黄', '小黑', '阿兰', '明月心', '黄蓉', '郭靖']
        }
    },
    methods: {
        tabSelect (index) {
            switch (index) {
                case 0:
                    this.$router.replace({name: 'chat', query: {mode: 'push'}})
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
