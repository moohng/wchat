<template lang="pug">
    .tab-cell
        header.header
            img(:src="icon")
        section.detail
            .title {{ title }}
            img.icon(:src="arrow")
</template>

<script>
import arrow from '@/assets/common/w-tab-cell-arrow-right_2.svg'

export default {
    props: ['icon', 'title'],
    data () {
        return {
            arrow: arrow
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.tab-cell {
    position: relative;
    height: 44px;
    padding: 0 12px;

    background-color: #fff;

    @include flex(flex-start)

    img {
        width: 28px;
        height: 28px;
    }

    .detail {
        width: 100%;
        margin-left: 8px;

        @include flex(space-between)
        .title {
            font-size: 15px;
        }
    }

    &:not(:nth-last-of-type(1))::after {
        content: '';
        @include abs(auto, 0, 0, 12px)
        height: 1px;

        background-color: #ccc;
    }

    &:active {
        background-color: #d9d9d9;
    }
}
</style>
