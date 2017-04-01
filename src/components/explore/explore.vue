<template lang="pug">
    .explore
        tab-group
            tab-cell(:icon="icons[0]", :title="titles[0]")
        tab-group
            tab-cell(:icon="icons[1]", :title="titles[1]")
            tab-cell(:icon="icons[2]", :title="titles[2]")
        tab-group
            tab-cell(:icon="icons[3]", :title="titles[3]")
            tab-cell(:icon="icons[4]", :title="titles[4]")
        tab-group
            tab-cell(:icon="icons[5]", :title="titles[5]")
            tab-cell(:icon="icons[6]", :title="titles[6]")
        tab-group
            tab-cell(:icon="icons[7]", :title="titles[7]")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

import friend from '@/assets/explore/w-explore-friend.svg'
import sao from '@/assets/explore/w-explore-sao.svg'
import shake from '@/assets/explore/w-explore-shake.svg'
import nearby from '@/assets/explore/w-explore-nearby.svg'
import bottle from '@/assets/explore/w-explore-bottle.svg'
import shop from '@/assets/explore/w-explore-shop.svg'
import game from '@/assets/explore/w-explore-game.svg'
import app from '@/assets/explore/w-explore-app.svg'

export default {
    name: 'explore',
    data () {
        return {
            icons: [friend, sao, shake, bottle,
                    nearby, shop, game, app],
            titles: ['朋友圈', '扫一扫', '摇一摇', '漂流瓶',
                    '附近的人', '购物', '游戏', '小程序']
        }
    },
    components: {
        TabCell,
        TabGroup
    }
}
</script>

<style lang="scss" scoped>
.explore {
    padding-top: 12px;
}
</style>
