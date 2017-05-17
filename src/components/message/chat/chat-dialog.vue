<template lang="pug">
    li.chat-dialog
        .wrap(v-if="date")
            span.date {{ message.time }}
        .wrap.content(:class="{reverse}")
            .icon
                img
            .context
                p {{ message.text }}
</template>

<script>
export default {
    props: ['message', 'date'],
    computed: {
        reverse () {
            return this.message.type === 'send'
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

.chat-dialog {
    min-height: 42px;
    margin: 12px 8px;

    .wrap {
        margin: 8px 0;
        text-align: center;

        .date {
            color: #fff;
            font-size: 70%;
            background: #bfbfbf;
            padding: 4px 8px;
            border-radius: 4px;
        }

        &.content {

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
                min-height: 22px;
                max-width: 60%;

                text-align: left;
                padding: 8px;
                border: 1px solid $lineColor;
                border-radius: 4px;
                word-break: break-all;

                background: $tintColor;

                @include flex(flex-start)

                // 指向
                &::after {
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 8px;
                    top: 15px;
                    left: -5px;

                    border: 1px solid $lineColor;
                    border-top: 0;
                    border-right: 0;
                    background-color: $tintColor;
                    transform: rotate(45deg);
                }
            }
        }
        // 反向
        &.reverse {
            justify-content: flex-end;

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
