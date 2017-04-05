<template lang="pug">
    .nav-bar
        header
            slot(name="left")
        section.center
            slot(name="title")
        footer
            slot(name="right")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.nav-bar {
    @include abs(0, 0, auto, 0)
    height: 44px;
    padding: 20px 12px 0;

    color: #fff;
    background-color: rgba(0, 0, 0, .95);
    z-index: 100;

    // 左右分布内部组件
    @include flex(space-between)

    .center {
        // 脱离父元素的 flex 布局
        @include abs(auto, 0, auto, 0)
        // 兼容浏览器
        line-height: 44px;
        // 居中内部组件
        @include flex()
        // 不挡住左右两个组件
        z-index: -1;
    }
}
</style>
