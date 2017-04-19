<template lang="pug">
    input.ui-button(type="button", :value="name", :disabled="disabled"
    @click="$emit('click')")
</template>

<script>
export default {
    props: ['name', 'disabled']
}
</script>

<style lang="scss" scoped>
.ui-button {
    width: 100%;
    height: 36px;

    color: #fff;
    font-size: 15px;
    outline: 0;
    border: 1px solid #ccc;
    background-color: #00fe50;
    border-radius: 4px;

    &:active {
        background-color: #00de40;
    }
    &:disabled {
        background-color: #30fe88;
    }
}
</style>
