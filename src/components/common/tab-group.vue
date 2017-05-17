<template lang="pug">
    ul.group
        slot
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.group {
    border: 1px solid $lineColor;
    border-left: 0;
    border-right: 0;

    margin: 18px 0 8px;
}
</style>
