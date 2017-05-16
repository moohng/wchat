<template lang="pug">
    .page
        slot(name="nav-bar")
        section.main(:class="inset")
            slot(name="main")
        slot(name="tab-bar")
</template>

<script>
export default {
    props: ['marginTop', 'marginBottom'],
    data () {
        return {
            inset: {
                'margin-top': this.marginTop,
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
        background-color: #efefef;

        &.margin-top {
            padding-top: 76px;
        }
        &.margin-bottom {
            padding-bottom: 49px;
        }

        overflow-y: scroll;
    }
}
</style>
