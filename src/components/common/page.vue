<template lang="pug">
    .page
        slot(name="nav-bar")
        section.content(:class="inset")
            slot(name="content")
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

    background-color: #efeff4;

    .content {
        height: 100%;
        box-sizing: border-box;
        padding-top: 64px;
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
