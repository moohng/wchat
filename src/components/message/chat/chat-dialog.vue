<template lang="pug">
    .chat-dialog
        .top(v-if="date")
            span.date {{ date }}
        .bottom(:class="{reverse}")
            .content
                .icon
                    img
                .context
                    p 里是;聊天内内容天内内容天内内容天内内容
</template>

<script>
export default {
    props: ['date', 'reverse']
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

.chat-dialog {
    min-height: 42px;
    padding: 6px 8px;

    .top {
        margin: 8px 0;
        .date {
            color: #fff;
            font-size: 12px;
            background-color: #999;
            padding: 4px 6px;
            border-radius: 4px;
        }
    }
    .bottom {
        width: 100%;

        @include flex(flex-start)

        .content {
            max-width: 80%;

            @include flex(flex-start, flex-start)

            .icon {
                margin-right: 8px;
            }
            img {
                width: 38px;
                height: 38px;
            }

            .context {
                position: relative;
                min-height: 38px;
                text-align: left;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;

                background-color: #a0e75a;

                @include flex(flex-start)

                // 指向
                &::after {
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 8px;
                    top: 15px;
                    left: -5px;

                    border-left: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    background-color: #a0e75a;
                    transform: rotate(45deg);
                }
            }
        }
        // 反向
        &.reverse {
            @include flex(flex-end)

            .icon {
                order: 1;
                margin-left: 8px;
            }
            .context::after {
                left: auto;
                right: -5px;
                transform: rotate(-135deg);
            }
        }
    }

}
</style>
