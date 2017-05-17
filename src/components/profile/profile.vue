<template lang="pug">
    .profile
        tab-group
            tab-cell.head(title="Kevin", subtitle="微信号: mohong668",
            :img="icons[0]", more, disclosure, large,
            @click.native="push('me')")
                img(slot="button", :src="icons[1]")
        tab-group
            tab-cell(:img="icons[2]", :title="titles[0]", disclosure)
            tab-cell(:img="icons[3]", :title="titles[1]", disclosure)
            tab-cell(:img="icons[4]", :title="titles[2]", disclosure)
            tab-cell(:img="icons[5]", :title="titles[3]", disclosure)
        tab-group
            tab-cell(:img="icons[6]", :title="titles[4]", disclosure)
        tab-group
            tab-cell(:img="icons[7]", :title="titles[5]", disclosure,
            @click.native="push('setting')")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

// 资源文件
import qrcode from '@/assets/profile/w-profile-qr.svg'
import head from '@/assets/profile/head-portrait.jpg'

import album from '@/assets/profile/w-profile-album.svg'
import collection from '@/assets/profile/w-profile-collection.svg'
import wallet from '@/assets/profile/w-profile-wallet.svg'
import vip from '@/assets/profile/w-profile-vip.svg'
import emoj from '@/assets/profile/w-profile-emoj.svg'
import setting from '@/assets/profile/w-profile-setting.svg'

export default {
    data () {
        return {
            icons: [head, qrcode ,album, collection, wallet, vip, emoj, setting],
            titles: ['相册', '收藏', '钱包', '卡包', '表情', '设置']
        }
    },
    methods: {
        push (to) {
            this.$router.replace({name: to, query: {mode: 'push'}})
        }
    },
    components: {
        TabGroup,
        TabCell,
    }
}
</script>

<style lang="scss" scoped>
.profile {

    .head img {
        width: 28px;
        height: 28px;
    }
}
</style>
