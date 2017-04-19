<template lang="pug">
    .modal
        .wrap
            i.icon
        p.tip {{ text }}
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.modal {
    @include fixed()

    background-color: transparent;
    z-index: 100;

    @include flex(center, center, column)

    .wrap {
        padding: 16px;

        background-color: #fff;
        border-radius: 4px;
    }
    p.tip {
        margin-top: 12px;

        font-size: 15px;
    }
    i.icon {
        display: inline-block;
        width: 50px;
        height: 50px;

        border: 3px solid #444;
        border-bottom-color: transparent;
        border-radius: 50%;

        animation: rotation .6s infinite linear;
    }
}

@keyframes rotation {
    100% {
        transform: rotate(360deg);
    }
}
</style>
