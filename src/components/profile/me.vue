<template>
  <view-box class="me">
    <x-header slot="header" :left-options="{backText: '我'}">
      <span slot="default">个人信息</span>
    </x-header>
    <template slot="default">
      <group>
        <cell :is-link="true" title="头像">
          <img slot="default" class="icon-bd" src="./icons/head-portrait.jpg">
        </cell>
        <cell :is-link="true" title="昵称">Kevin</cell>
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
.me {
  .icon-bd {
    width: 48px;
    height: 48px;
  }
}
</style>
