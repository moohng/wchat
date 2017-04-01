<template lang="pug">
    .me
        nav-bar
            .left(slot="left", @click="$router.push({name: 'profile'})")
                i.icon-back
                span 返回
            .title(slot="title") 个人信息
        section.content
            tab-group
                //- tab-cell
</template>

<script>
import NavBar from '@/components/common/nav-bar'
import TabGroup from '@/components/common/tab-group'

export default {
    components: {
        NavBar,
        TabGroup
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

.me {
    @include abs(0, 0, 0, 0)

    background-color: #efeff4;

    .left {
        position: relative;

        .icon-back {
            position: absolute;
            width: 10px;
            height: 10px;
            // 居中
            margin-top: -6px;
            top: 50%;

            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: rotate(45deg);
        }
        span {
            margin-left: 10px;
        }
    }
}
</style>
