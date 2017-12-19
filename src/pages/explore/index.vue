<template>
  <div class="explore">
    <group>
      <cell title="朋友圈" is-link>
        <img slot="icon" src="./icons/w-explore-friend.svg" alt="friend">
      </cell>
    </group>
    <group>
      <cell title="扫一扫" is-link>
        <img slot="icon" src="./icons/w-explore-sao.svg" alt="sao">
      </cell>
      <cell title="摇一摇" is-link>
        <img slot="icon" src="./icons/w-explore-shake.svg" alt="shake">
      </cell>
    </group>
    <group>
      <cell title="附近的人" is-link>
        <img slot="icon" src="./icons/w-explore-nearby.svg" alt="nearby">
      </cell>
      <cell title="漂流瓶" is-link>
        <img slot="icon" src="./icons/w-explore-bottle.svg" alt="bottle">
      </cell>
    </group>
    <group>
      <cell title="购物" is-link>
        <img slot="icon" src="./icons/w-explore-shop.svg" alt="shop">
      </cell>
      <cell title="游戏" is-link>
        <img slot="icon" src="./icons/w-explore-game.svg" alt="game">
      </cell>
    </group>
    <group>
      <cell title="小程序" is-link>
        <img slot="icon" src="./icons/w-explore-app.svg" alt="app">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'explore',
  components: {
    Cell,
    Group
  }
}
</script>
