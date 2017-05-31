<template lang="pug">
    .confirm
        .wrap
            .content
                h1 {{ title || '提示' }}
                p.text {{ text }}
            ul.btn
                li(@click="$emit('confirm', false)") {{ cancel || '取消' }}
                li(@click="$emit('confirm', true)") {{ ok || '确定' }}

</template>

<script>
export default {
    name: 'confirm',
    props: ['text', 'title', 'ok', 'cancel']
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.confirm {
    @include fixed()

    background: rgba(0, 0, 0, .4);
    z-index: 100;

    @include flex()

    .wrap {
        width: 80%;

        background: #fff;
        border-radius: 12px;

        .content {
            padding: 18px 0;
            h1 {
                font-size: 120%;
            }
            p {
                margin-top: 8px;
            }
        }

        .btn {
            @include flex()

            li {
                padding: 12px 0;
                flex: 1;

                color: #00729f;
                font-weight: bold;
            }
            li:first-child {
                border-right: 1px solid $lineColor;
            }
        }
    }
}
</style>
