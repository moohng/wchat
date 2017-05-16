<template lang="pug">
    .input(@click="focus")
        label {{ name }}
        input(:type="type", :placeholder="placeholder",
        ref="input", @input="input($event.target)")
</template>

<script>
export default {
    props: ['name', 'placeholder', 'type'],
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
.input {
    position: relative;
    padding: 16px 0 8px;

    border-bottom: 1px solid #ccc;

    label {
        font-size: 15px;
        margin-right: 48px;
    }

    input {
        border: 0;
        font-size: 15px;
        outline: 0;
        background-color: transparent;
    }
}
</style>
