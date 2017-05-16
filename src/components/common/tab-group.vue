<template lang="pug">
    ul.group
        slot
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.group {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    margin: 18px 0 4px;

    &:nth-of-type(1) {
        margin-top: auto;
    }
}
</style>
