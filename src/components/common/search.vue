<template lang="pug">
    .search
        input(type="text", placeholder="搜索")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin.scss';

.search {
    height: 32px;
    border: 1px solid $lineColor;
    border-radius: 4px;
    background: #fff;
    margin: 8px 12px;

    display: flex;
    align-items: center;

    input {
        width: 100%;
        border: none;
        outline: none;
        text-align: center;
    }
}
</style>
