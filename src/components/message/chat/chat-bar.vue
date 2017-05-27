<template lang="pug">
    footer.chat-bar
        .content
            .wrap
                .icon
                    icon-voice
            .wrap.text-area
                p.edit-box(contenteditable, ref="input",
                @keydown.enter.prevent="send($event.target)",
                @input.prevent="input($event.target)")
            .wrap
                .icon
                    icon-emoji
            .wrap
                transition(name="scale", mode="out-in")
                    a.icon.send-btn(v-if="showSend",
                    @click.stop.prevent="send($refs['input'])") 发送
                    .icon(v-else)
                        icon-more


</template>

<script>
import IconVoice from './icon/voice'
import IconEmoji from './icon/emoji'
import IconMore from './icon/more'

import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            showSend: false
        }
    },
    props: ['to'],
    computed: {
        ...mapGetters(['account'])
    },
    methods: {
        send (el) {
            const text = el.innerText
            if (text.length === 0) return

            console.log(text)
            // 封装消息
            const time = new Date()
            const message = {
                to: this.to,
                content: {
                    text
                },
                time: time.getHours() + ':' + time.getMinutes()
            }
            this.$store.dispatch('vx_send', message)
            el.innerText = ''
            this.showSend = false
        },
        input (el) {
            const text = el.innerText

            // 显示发送按钮
            this.showSend = text.length > 0
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
            position: relative;
            height: 38px;
            padding: 0 8px;

            @include flex()

            .icon {
                width: 32px;
                height: 32px;

                color: #444;
            }

            .send-btn {
                position: relative;

                color: #fff;
                line-height: 32px;
                font-size: 90%;

                background: $tintColor;

                &::before,
                &::after {
                    content: '';
                    @include abs(0, auto, 0, auto)
                    width: 6px;
                    background: $tintColor;
                }
                &::before {
                    left: -4px;
                }
                &::after {
                    right: -3px;
                }
            }

            // 动画
            .scale-enter,
            .scale-leave-active {
                transform: scale(0.2);
            }
            .scale-enter-active {
                transition: transform .3s ease-out;
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
