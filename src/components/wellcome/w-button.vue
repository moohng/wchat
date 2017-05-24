<template lang="pug">
    input.w-button(:type="type", :value="name", :disabled="disabled"
    @click="$emit('click')")
</template>

<script>
export default {
    props: ['name', 'disabled', 'type']
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.w-button {
    width: 100%;
    max-width: 414px;
    height: 42px;
    padding: 0;
    margin: auto;

    color: #fff;
    font-size: 100%;
    outline: 0;
    border: 1px solid $lineColor;
    background: $tintColor;
    border-radius: 4px;

    &:disabled {
        box-shadow: inset 0 100px hsla(0, 0%, 100%, .6);
    }
}
</style>
