<template lang="pug">
    li.message-list
        header.header
            img
        section.content
            .top
                span.title {{ name || '默认' }}
                span.time {{ time || '12:23' }}
            .bottom
                p.context {{ text || '默认消息。。。' }}
                i.icon(v-if="disturb")
</template>

<script>
export default {
    props: ['data'],
    computed: {
        disturb () {
            return false
        },
        name () {
            // 聊天列表的名字
            return this.data.name
        },
        time () {
            // 最后一条消息 时间
            const len = this.data.messages.length
            if (len > 0) {
                return this.data.messages[len - 1].time
            }
            return false
        },
        text () {
            // 最后一条消息 内容
            const len = this.data.messages.length
            if (len > 0) {
                return this.data.messages[len - 1].text
            }
            return false
        }
    },
    mounted () {
        // console.log(this.data)
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.message-list {
    position: relative;
    height: 72px;
    padding: 0 12px;

    background-color: #fff;
    @include flex(space-start)

    .header {
        margin-right: 8px;

        img {
            width: 54px;
            height: 54px;
        }
    }
    .content {
        height: 54px;
        // 将父容器撑满
        width: 100%;

        @include flex(space-around, flex-start, column)

        .top {
            width: 100%;
            @include flex(space-between)

            .title {
                font-weight: bold;
            }
            .time {
                font-size: 70%;
                color: $lightColor;
            }
        }
        .bottom {
            width: 100%;

            @include flex(space-between)

            .context {
                // 限制死了最大宽度, 防止内容超出父容器
                // max-width: 230px;
                font-size: 90%;
                color: $lightColor;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            // 暂时 通过响应式解决
            @media screen and (min-width: 320px) and (max-width: 375px) {
                .context {
                    max-width: 230px;
                }
            }
            @media screen and (min-width: 375px) and (max-width: 414px) {
                .context {
                    max-width: 280px;
                }
            }
            @media screen and (min-width: 414px) {
                .context {
                    max-width: 80%;
                }
            }

            .icon {
                display: inline-block;
                width: 10px;
                height: 10px;

                background: #98ea12;
            }
        }

    }

    // 下划线 除了最后一个
    &:not(:nth-last-of-type(1))::after {
        content: '';
        @include abs(auto, 0, 0, 12px)
        height: 1px;

        background: $lineColor;
    }
    // 点击变暗效果
    &:active {
        background: $lineColor;
    }
}
</style>
