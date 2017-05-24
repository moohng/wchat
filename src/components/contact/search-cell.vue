<template lang="pug">
    li.search-cell(@click="focus")
        header.header
            img
        section.content
            input(ref="input", type="text", placeholder="微信号/手机号",
            @input="input($event.target)")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

export default {
    data () {
        return {

        }
    },
    methods: {
        focus () {
            this.$refs['input'].focus()
        },
        input (el) {
            this.$emit('input', el.value)
        }
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.search-cell {
    position: relative;
    height: 48px;
    padding: 0 12px;

    background: #fff;

    @include flex(flex-start)

    .header {
        img {
            width: 28px;
            height: 28px;
        }
    }

    .content {
        flex: 1;
        margin: 0 8px;

        input {
            width: 100%;
            border: 0;

            font-size: 100%;
            outline: none;
        }

    }
}
</style>
