<template lang="pug">
    .left
        i.icon-back
        span {{ title || '返回'}}
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
.left {
    position: relative;

    .icon-back {
        position: absolute;
        width: 10px;
        height: 10px;
        // 居中
        margin-top: -6px;
        top: 50%;

        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
    }
    span {
        margin-left: 10px;
    }
}
</style>
