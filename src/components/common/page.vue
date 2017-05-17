<template lang="pug">
    .page
        slot(name="nav-bar")
        section.main(:class="inset")
            slot(name="main")
        slot(name="tab-bar")
</template>

<script>
export default {
    props: ['marginBottom'],
    data () {
        return {
            inset: {
                'margin-bottom': this.marginBottom
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.page {
    @include abs(0, 0, 0, 0)
    width: 100%;
    height: 100%;

    .main {
        height: 100%;
        box-sizing: border-box;
        padding-top: 64px;
        background: $bgColor;

        &.margin-bottom {
            padding-bottom: 59px;
        }

        overflow-y: scroll;
    }
}
</style>
