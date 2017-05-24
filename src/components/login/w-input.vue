<template lang="pug">
    .input(@click.stop="focus", :class="{error}")
        label {{ name }}
        input(v-type="type", :placeholder="placeholder",
        ref="input", @input="input($event.target)")
</template>

<script>
export default {
    props: ['name', 'placeholder', 'type', 'value'],
    data () {
        return {
            error: false
        }
    },
    directives: {
        type: {
            bind(el, { value }) {
                if (value === 'username') {
                    el.type = 'text'
                }
                else if (value === 'password') {
                    el.type = 'password'
                }
            }
        }
    },
    methods: {
        focus () {
            this.$refs['input'].focus()
        },
        input (el) {
            const isTrue = /^[0-9a-zA-Z._@]{6,16}$/.test(el.value)

            let value = el.value
            if (!isTrue)  {
                value = ''
            }
            this.error = !isTrue
            this.$emit('input', value)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.input {
    position: relative;
    padding: 18px 0 12px;
    max-width: 414px;
    margin: auto;

    border-bottom: 1px solid $lineColor;

    &.error {
        border-bottom-color: red;
    }

    label {
        display: inline-block;
        width: 68px;
        margin-right: 32px;

        text-align: justify;
        vertical-align: middle;
        line-height: 0;
        &::after {
            content: '';
            display: inline-block;

            width: 100%;
        }
    }

    input {
        max-width: 160px;
        width: 60%;
        border: 0;
        font-size: 90%;
        outline: 0;
        background: transparent;
    }
}
</style>
