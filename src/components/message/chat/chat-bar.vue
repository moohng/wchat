<template lang="pug">
    footer.chat-bar
        .content
            .wrap
                .icon
                    icon-voice
            .wrap.text-area
                p.edit-box(contenteditable="true",
                @keydown.enter.prevent="send($event.target)")
            .wrap
                .icon
                    icon-emoji
            .wrap
                .icon
                    icon-more

</template>

<script>
import IconVoice from './icon/voice'
import IconEmoji from './icon/emoji'
import IconMore from './icon/more'

export default {
    data () {
        return {
        }
    },
    methods: {
        send (el) {
            console.log(el.innerText)
            // 封装消息
            const time = new Date()
            const message = {
                type: 'send',
                time: time.getHours() + ':' + time.getMinutes(),
                text: el.innerText
            }
            this.$store.dispatch('send', message)
            el.innerText = ''
        }
    },
    components: {
        IconVoice,
        IconEmoji,
        IconMore
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

.chat-bar {
    @include abs(auto, 0, 0, 0)

    border-top: 1px solid $lineColor;
    background: rgba(235, 235, 235, .95);

    z-index: 100;

    .content {
        margin: 8px auto;

        @include flex(space-between, flex-end)

        .wrap {
            height: 38px;
            padding: 0 8px;

            @include flex()

            .icon {
                width: 28px;
                height: 28px;

                color: $lightColor;
            }
        }

        .text-area {
            // 缩放显示
            flex: 1;
            height: auto;
            padding: 0;

            border: 1px solid $lineColor;
            border-radius: 4px;
            background: #fff;

            overflow: hidden;

            .edit-box {
                width: 100%;
                padding: 8px;
                min-height: 20px;

                text-align: left;
                word-break: break-all;

                outline: none;
            }

        }
    }
}
</style>
