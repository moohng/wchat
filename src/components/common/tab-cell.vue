<template lang="pug">
    li.tab-cell(:class="{large, contact}")
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
    // type: 'subtitle', 'detail', 'basic'(默认), 'contact'(联系人列表)
    props: ['img', 'title', 'subtitle', 'detail', 'center',
            'disclosure', 'more', 'large', 'contact'],
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.tab-cell {
    position: relative;
    height: 46px;
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
        width: 100%;
        margin: auto 8px;
        line-height: 1.8;
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

        .subtitle {
            font-size: 88%;
            color: $lightColor;
        }
    }

    .more {
        @include flex()

        .button {
            margin-right: 8px;
        }

        // 向右 图标
        .disclosure {
            width: 8px;
            height: 8px;

            border: 2px solid $lightColor;
            border-top: transparent;
            border-left: transparent;

            transform: rotate(-45deg);
        }
    }

    // 大 cell
    &.large {
        height: 78px;

        .header {
            img {
                width: 58px;
                height: 58px;

                border-radius: 4px;
            }
        }
    }
    // 联系人 高度不同
    &.contact {
        height: 58px;
    }

    // cell 下划线 除了最后一个
    &:not(:nth-last-of-type(1))::after {
        content: '';
        @include abs(auto, 0, 0, 12px)
        height: 1px;

        background: $lineColor;
    }
    // cell 选中变暗
    &:active {
        background: $lineColor;
    }
}
</style>
