<template lang="pug">
    .tab-cell(:class="large")
        header.header(v-if="img")
            img(:src="img")
        section.content(:class="{subtitle, detail, center}")
            span.title {{ title }}
            span.subtitle(v-if="subtitle || detail") {{ subtitle || detail }}
        footer.more(v-if="more || disclosure")
            .button(v-if="more")
                slot(name="button")
            i.disclosure(v-if="disclosure")
</template>

<script>

export default {
    // type: 'subtitle', 'detail', 'basic'(默认)
    props: ['img', 'title', 'subtitle', 'detail', 'center',
            'disclosure', 'more', 'large'],
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.tab-cell {
    position: relative;
    height: 41px;
    padding: 0 12px;

    background-color: #fff;

    @include flex(flex-start)

    .header {
        margin-right: 8px;

        img {
            width: 28px;
            height: 28px;

            border-radius: 4px;
        }
    }

    .content {
        width: 100%;
        // 默认
        @include flex(flex-start)
        // 上下子标题
        &.subtitle {
            @include flex(space-around, flex-start, column)
        }
        // 左右子标题
        &.detail {
            @include flex(space-between)
        }
        // 居中标题
        &.center {
            @include flex()
        }

        .title {
            font-size: 15px;
        }
        .subtitle {
            font-size: 13px;
            color: #999;
        }
    }

    .more {
        margin-left: 8px;

        @include flex()

        .button {
            margin-right: 8px;
        }

        .disclosure {
            display: inline-block;
            width: 8px;
            height: 8px;

            border-right: 2px solid #999;
            border-bottom: 2px solid #999;

            transform: rotate(-45deg);
        }
    }

    // 大 cell
    &.large {
        height: 68px;

        .header {
            img {
                width: 56px;
                height: 56px;
            }
        }

        .content.subtitle {
            height: 48px;
        }
    }

    // cell 下划线
    &:not(:nth-last-of-type(1))::after {
        content: '';
        @include abs(auto, 0, 0, 12px)
        height: 1px;

        background-color: #ccc;
    }
    // cell 选中变暗
    &:active {
        background-color: #d9d9d9;
    }
}
</style>
