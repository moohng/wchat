<template lang="pug">
    header.nav-bar
        .left
            slot(name="left")
        .title
            slot(name="title")
        .right
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
    line-height: 44px;
    background-color: rgba(0, 0, 0, .95);
    z-index: 100;

    .left {
        @include abs(auto, auto, 0, 12px)
    }
    .right {
        @include abs(auto, 12px, 0, auto)
    }
}
</style>
