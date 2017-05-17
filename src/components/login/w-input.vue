<template lang="pug">
    .input(@click="focus")
        label {{ name }}
        input(:type="type", :placeholder="placeholder", :value="value",
        ref="input", @input="input($event.target)")
</template>

<script>
export default {
    props: ['name', 'placeholder', 'type', 'value'],
    methods: {
        focus () {
            this.$refs['input'].focus()
        },
        input (el) {
            this.$emit('input', el.value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.input {
    position: relative;
    padding: 18px 0 12px;

    border-bottom: 1px solid $lineColor;

    label {
        margin-right: 48px;
    }

    input {
        border: 0;
        font-size: 100%;
        outline: 0;
        background: transparent;
    }
}
</style>
