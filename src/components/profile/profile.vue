<template lang="pug">
    .profile
        tab-group
            tab-head(@click.native="$router.push({name: 'me'})")
        tab-group
            tab-cell(:icon="icons[0]", :title="titles[0]")
            tab-cell(:icon="icons[1]", :title="titles[1]")
            tab-cell(:icon="icons[2]", :title="titles[2]")
            tab-cell(:icon="icons[3]", :title="titles[3]")
        tab-group
            tab-cell(:icon="icons[4]", :title="titles[4]")
        tab-group
            tab-cell(:icon="icons[5]", :title="titles[5]")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabHead from './tab-head'
import TabCell from '@/components/common/tab-cell'

import album from '@/assets/profile/w-profile-album.svg'
import collection from '@/assets/profile/w-profile-collection.svg'
import wallet from '@/assets/profile/w-profile-wallet.svg'
import vip from '@/assets/profile/w-profile-vip.svg'
import emoj from '@/assets/profile/w-profile-emoj.svg'
import setting from '@/assets/profile/w-profile-setting.svg'


export default {
    data () {
        return {

            icons: [album, collection, wallet, vip, emoj, setting],
            titles: ['相册', '收藏', '钱包', '卡包', '表情', '设置']
        }
    },
    components: {
        TabGroup,
        TabHead,
        TabCell,
    }
}
</script>

<style lang="scss" scoped>
.profile {
    padding-top: 12px;
}
</style>
