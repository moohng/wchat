<template lang="pug">
    a.nav-back
        i.icon-back
        span {{ title || '返回'}}
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
.nav-back {
    display: inline-block;

    .icon-back {
        display: inline-block;
        width: 10px;
        height: 10px;

        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(45deg);
    }
}
</style>
