<template lang="pug">
    nav.tab-bar
        router-link.wrap(v-for="n in 4", :to="links[n - 1]" tag="div")
            img(:src="icons[n - 1]")
            span {{titles[n - 1]}}
</template>

<script>
import wchat from '@/assets/common/w-tab-bar-wchat.svg'
import wchatSelected from '@/assets/common/w-tab-bar-wchat-selected.svg'
import explore from '@/assets/common/w-tab-bar-explore.svg'
import exploreSelected from '@/assets/common/w-tab-bar-explore-selected.svg'

export default {
    name: 'tab-bar',
    data () {
        return {
            titles: ['微信', '通讯录', '发现', '我'],
            icons: [wchat, explore],
            links: [{name: 'message'},
                    {name: 'contact'},
                    {name: 'explore'},
                    {name: 'profile'}]
        }
    }
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
        // 父容器宽度不够 自动等比缩小
        width: 100%;
        height: 100%;

        font-size: 70%;
        color: #999;

        @include flex(center, center, column)

        img {
            height: 28px;
            width: 28px;
        }
    }

    .router-link-active {
        color: #1aad19;
    }
}
</style>
