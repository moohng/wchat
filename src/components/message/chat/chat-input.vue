<template lang="pug">
    .chat-input
        .content
            .wrap
                img.voice(:src="icons[0]")
            .wrap.input
                input(@keyup.enter="send($event.target)")
            .wrap
                img.emoji(:src="icons[1]")
            .wrap
                img.more(:src="icons[2]")

</template>

<script>
import voice from '@/assets/message/wchat-voice.svg'
import emoji from '@/assets/message/wchat-emoji.svg'
import more from '@/assets/message/wchat-more.svg'

export default {
    data () {
        return {
            icons: [voice, emoji, more]
        }
    },
    methods: {
        send (el) {
            console.log(el.value)
            // 封装消息
            const time = new Date()
            const message = {
                type: 'send',
                time: time.getHours() + ':' + time.getMinutes(),
                text: el.value
            }
            this.$store.dispatch('send', message)
            el.value = ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/mixin';

.chat-input {
    @include abs(auto, 0, 0, 0)
    height: 48px;

    border-top: 1px solid #ccc;
    background: rgba(225, 225, 225, .95);

    z-index: 100;

    .content {
        height: 100%;
        @include flex(space-between)

        .wrap {
            padding: 0 4px;

            @include flex()

            img {
                width: 26px;
                height: 26px;
            }
        }

        .input {
            width: 100%;

            input {
                width: 100%;
                height: 32px;
                padding: 0 4px;
                border: none;
                outline: none;
                border-radius: 4px;

                font-size: 14px;
            }
        }
    }
}
</style>
