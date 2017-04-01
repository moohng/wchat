<template lang="pug">
    li.wchat-list
        header.header
            img
        section.detail
            .top
                span.title 微信团队
                span.time 15:01
            .bottom
                p.context 程序人生人程序人生人程序人生人人生人人生人生人生:过程
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.wchat-list {
    position: relative;
    padding: 12px;

    background-color: #fff;
    @include flex(space-start)

    .header {
        img {
            width: 48px;
            height: 48px;
        }
    }
    .detail {
        height: 48px;
        // 将父容器撑满
        flex-grow: 1;
        margin-left: 8px;

        @include flex(space-around, flex-start, column)

        .top {
            width: 100%;
            @include flex(space-between)

            .title {
                // font-size: 15px;
            }
            .time {
                font-size: 70%;
                color: #999;
            }
        }
        .bottom {
            width: 100%;
            text-align: left;
            overflow: hidden;

            .context {
                // 限制死了最大宽度, 防止内容超出父容器
                // 暂时没想到好的解决办法
                max-width: 230px;
                font-size: 75%;
                color: #666;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

    }

    // 下划线 除了最后一个
    &:not(:nth-last-of-type(1))::after {
        content: '';
        @include abs(auto, 0, 0, 12px)
        height: 1px;

        background-color: #ccc;
    }
    // 点击变暗效果
    &:active {
        background-color: #d9d9d9;
    }
}
</style>
