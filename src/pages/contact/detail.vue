<template>
  <view-box class="detail">
    <x-header slot="header">
      <span slot="title">详细资料</span>
    </x-header>
    <template slot="default" v-if="user.username">
      <group>
        <cell :title="user.title" :inline-desc="'微信号：' + user.username"></cell>
      </group>
      <group>
        <cell :is-link="true" title="设置备注和标签"></cell>
      </group>
      <group>
        <cell title="地区" value="广东 深圳"></cell>
        <cell :is-link="true" title="个人相册" value="对不起，我还没准备好"></cell>
        <cell :is-link="true" title="更多"></cell>
      </group>
      <div class="wrap">
        <x-button type="primary" @click.native="click">{{ user.friendly ? '发消息' : '加好友' }}</x-button>
      </div>
    </template>
    <template slot="default" v-else>
      <div class="view"><span>用户不存在</span></div>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, Group, Cell, XButton } from 'vux'

export default {
  name: 'detail',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    click () {
      if (this.user.friendly) {
        // 跳转到chat界面
        this.$router.replace({
          name: 'chat',
          query: {
            mode: 'push',
            title: this.user.username
          }
        })
      }
      else {
        this.$addFriend(this.user.username, err => {
          if (err) {
            console.log(err)
            return
          }

          // 发送请求成功
          console.log('发送请求成功')
          this.$completed('已发送添加好友请求')
        })
      }
    }
  },
  mounted () {
    // 获取用户信息列表
    const username = this.$route.query.username
    this.$search(username, (err, user) => {
      if (err) {
        console.log(err)
        return
      }

      this.user = user
    })
  },
  components: {
    ViewBox,
    XHeader,
    Group,
    Cell,
    XButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.detail {

    .wrap {
        padding: 0 12px;
        margin-top: 20px;
    }

    .view {
        height: 100%;

        color: $lightColor;

        @include flex()
    }
}
</style>
