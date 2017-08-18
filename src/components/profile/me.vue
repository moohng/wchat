<template>
  <view-box class="me">
    <x-header slot="header" :left-options="{backText: '我', preventGoBack: true}"
    @on-click-back="$router.replace({name: 'profile'})">
      <span slot="default">个人信息</span>
    </x-header>
    <template slot="default">
      <group>
        <cell :is-link="true" title="头像"></cell>
        <cell :is-link="true" title="名字">Kevin</cell>
        <cell :is-link="true" title="微信号">moohng123</cell>
        <cell :is-link="true" title="我的二维码"></cell>
        <cell :is-link="true" title="我的地址"></cell>
      </group>
      <group>
        <cell :is-link="true" title="性别">男</cell>
        <cell :is-link="true" title="地区">广东 深圳</cell>
        <cell :is-link="true" title="个性签名">我没有签名怎么办</cell>
      </group>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell } from 'vux'

export default {
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
