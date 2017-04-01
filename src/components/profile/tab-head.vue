<template lang="pug">
    .tab-head
        header.header
            img(:src="head")
        section.detail
            .content
                span.title Kevin
                span.sub-title 微信号: mohong668
            .icon
                img(:src="qrcode")
                img(:src="arrow")
</template>

<script>
import arrow from '@/assets/common/w-tab-cell-arrow-right_2.svg'
import qrcode from '@/assets/profile/w-profile-qr.svg'
import head from '@/assets/profile/head-portrait.jpg'

export default {
    data () {
        return {
            head: head,
            qrcode: qrcode,
            arrow: arrow
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.tab-head {
    position: relative;
    padding: 12px;

    background-color: #fff;
    @include flex(flex-start)

    .header {
        img {
            width: 56px;
            height: 56px;

            border-radius: 5px;
            border: 1px solid #ccc;
        }
    }
    .detail {
        width: 100%;
        height: 56px;
        margin-left: 8px;

        @include flex(space-between)

        .content {
            @include flex(center, flex-start, column)

            .title {
                font-weight: bold;
            }
            .sub-title {
                margin-top: 8px;
                font-size: 70%;
            }
        }

        .icon {
            img {
                width: 28px;
                height: 28px;
            }
        }
    }

    &:active {
        background-color: #d9d9d9;
    }
}
</style>
