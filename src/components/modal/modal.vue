<template lang="pug">
    .modal
        .wrap
            i.icon(:class="[type]")
        p.tip {{ text }}
</template>

<script>
export default {
    props: ['text', 'type']
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.modal {
    @include fixed()

    background: rgba(0, 0, 0, .4);
    z-index: 100;

    @include flex(center, center, column)

    .wrap {
        padding: 16px;

        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    }
    p.tip {
        margin-top: 16px;

        color: #fff;
    }
    i.icon {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 48px;

        &.loading {
            border: 3px solid #444;
            border-bottom-color: transparent;
            border-radius: 50%;

            animation: rotation .6s infinite linear;
        }

        &.completed::after {
            content: '';
            @include abs(6px, auto, auto, 6px)
            width: 36px;
            height: 20px;

            border: 6px solid $tintColor;
            border-top: 0;
            border-right: 0;

            transform: rotate(-45deg);
        }

        &.error::before,
        &.error::after {
            content: '';
            @include abs(21px, auto, auto, 6px)
            width: 36px;
            height: 6px;

            background: #c33;
        }
        &.error::before {
            transform: rotate(-45deg);
        }
        &.error::after {
            transform: rotate(45deg);
        }
    }
}

@keyframes rotation {
    100% {
        transform: rotate(360deg);
    }
}
</style>
