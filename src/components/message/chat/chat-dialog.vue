<template lang="pug">
    li.chat-dialog
        .wrap(v-if="date")
            span.date {{ message.time }}
        .wrap.content(:class="{reverse}")
            .icon
                img
            .context
                p {{ message.content.text }}
</template>

<script>
export default {
    props: ['message', 'date'],
    computed: {
        reverse () {
            if (this.message.from) {
                return false
            }
            else {
                return true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

$myColor: #a6ef5d;
$otherColor: #fff;

.chat-dialog {
    min-height: 42px;
    margin: 12px 8px;

    .wrap {
        margin: 8px 0;
        text-align: center;

        .date {
            padding: 4px 8px;

            color: #fff;
            font-size: 70%;

            background: #cecece;
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
                max-width: calc(100% - 120px);
                padding: 8px 12px;

                text-align: left;
                word-break: break-all;

                // 其他人 对话框背景
                border: 1px solid $lineColor;
                border-radius: 4px;
                background: $otherColor;

                @include flex(flex-start)

                // 指向
                &::after {
                    @include abs(14px, auto, auto, -4px)
                    content: '';
                    width: 8px;
                    height: 8px;

                    border: 1px solid $lineColor;
                    border-top-color: transparent;
                    border-right-color: transparent;

                    background: $otherColor;
                    transform: rotate(45deg);
                }
            }
        }
        // 反向   我的对话框
        &.reverse {
            justify-content: flex-end;

            .context {
                background: $myColor;
            }

            .icon {
                order: 1;
                margin-right: 0;
                margin-left: 8px;
            }
            .context::after {
                left: auto;
                right: -5px;
                background: $myColor;
                transform: rotate(-135deg);
            }
        }
    }

}
</style>
