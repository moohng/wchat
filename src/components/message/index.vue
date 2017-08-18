<template>
  <div class="message">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <cell v-for="session in sessionList" :title="session.title"
      @click.native.stop="$router.push({name: 'chat'})">
        <img slot="icon" src="" alt="" class="cell-hd__icon">
        <span slot="inline-desc" class="cell-desc">这段文字很长很长很长很长很长很长很长很长很长很长很长很长</span>
        <span slot="default" class="cell-time">14:20</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'

import { mapState } from 'vuex'

export default {
  computed: mapState(['sessionList']),
  components: {
    Group,
    Search,
    Cell
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.message {
  .cell-hd__icon {
    width: 48px;
    height: 48px;
    border: 1px solid #000;
  }
  .cell-desc {
    @include textHidden
  }
  .cell-time {
    position: absolute;
    right: 15px;
    top: 15px;

    font-size: 12px;
  }
}
</style>
