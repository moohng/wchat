<template lang="pug">
    footer.tab-bar
        router-link.wrap(v-for="tab in tabbar", :to="tab.to")
            .icon
                component(:is="tab.icon")
            span {{ tab.title }}
</template>

<script>
// SVG 图标
import IconWchat from '@/components/icon/wchat'
import IconContact from '@/components/icon/contact'
import IconExplore from '@/components/icon/explore'
import IconProfile from '@/components/icon/profile'

export default {
    name: 'tab-bar',
    data () {
        return {
            tabbar: [
                {
                    title: '微信',
                    icon: 'icon-wchat',
                    to: {name: 'message'}
                },
                {
                    title: '通讯录',
                    icon: 'icon-contact',
                    to: {name: 'contact'}
                },
                {
                    title: '发现',
                    icon: 'icon-explore',
                    to: {name: 'explore'}
                },
                {
                    title: '我',
                    icon: 'icon-profile',
                    to: {name: 'profile'}
                }
            ]
        }
    },
    components: { IconWchat, IconContact, IconExplore, IconProfile }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin.scss';

.tab-bar {
    @include abs(auto, 0, 0, 0)
    height: 48px;

    border-top: 1px solid #ccc;
    background: rgba(225, 225, 225, .95);

    z-index: 100;

    @include flex()

    .wrap {
        flex: 1;

        font-size: 70%;
        // 未选中颜色
        color: #999;

        @include flex(center, center, column)

        .icon {
            height: 28px;
            width: 28px;
        }
    }

    .router-link-active {
        // 选中颜色
        color: #1aad19;
    }
}
</style>
