<template>
  <div class="page">
    <slot name="nav-bar"></slot>
    <section class="main" :class="inset">
      <slot name="main"></slot>
    </section>
    <slot name="tab-bar"></slot>
  </div>
</template>

<script>
export default {
  props: ['marginBottom'],
  data () {
    return {
      inset: {
        'margin-bottom': this.marginBottom
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.page {
  @include abs(0, 0, 0, 0)
  width: 100%;
  height: 100%;

  .main {
    height: 100%;
    box-sizing: border-box;
    padding-top: 64px;
    background: $bgColor;

    &.margin-bottom {
      padding-bottom: 59px;
    }

    overflow-y: scroll;
  }
}
</style>
