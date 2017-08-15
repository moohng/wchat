<template>
  <view-box class="setting">
    <x-header slot="header" :left-options="{backText: '我', preventGoBack: true}"
    @on-click-back="$router.replace({name: 'profile', query: {mode: 'pop'}})">
      <span slot="default">设置</span>
    </x-header>
    <template slot="default">
      <group>
        <cell :is-link="true" value-align="left" title="账号与安全"></cell>
      </group>
      <group>
        <cell :is-link="true" value-align="left" title="新消息通知"></cell>
        <cell :is-link="true" value-align="left" title="隐私"></cell>
        <cell :is-link="true" value-align="left" title="通用"></cell>
      </group>
      <group>
        <cell :is-link="true" value-align="left" title="帮助与反馈"></cell>
        <cell :is-link="true" value-align="left" title="关于微信"></cell>
      </group>
      <group>
        <cell title="退出登录" @click.native="logout"></cell>
      </group>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell } from 'vux'

export default {
    methods: {
        logout () {

            this.$loading('注销中...')

            this.$logout(err => {
                this.$close()
                if (err) {
                    console.log(err)
                    return
                }

                console.log('注销成功')
                this.$router.replace({
                    name: 'login',
                    query: {
                        mode: 'dismiss'
                    }
                })

                // 关闭连接
                this.$disconnect()
            })

        }
    },
    components: {
        ViewBox,
        XHeader,
        Group,
        Cell
    }
}
</script>

<style lang="scss" scoped>

</style>
