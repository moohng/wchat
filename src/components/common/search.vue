<template lang="pug">
    .search
        input(type="text", placeholder="搜索")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.search {
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
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
