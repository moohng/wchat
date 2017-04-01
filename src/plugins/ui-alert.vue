<template lang="pug">
    .alert(@click.self="$emit('close')")
        p {{text}}
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="scss" scoped>
.alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, .6);
    z-index: 100;

    p {
        font-size: 18px;
        color: #fff;
    }
}
</style>
