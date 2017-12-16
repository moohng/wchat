<template>
  <view-box class="add">
    <x-header slot="header">
      <span>添加朋友</span>
    </x-header>
    <template slot="default">
      <group>
        <x-input v-model="username" placeholder="微信号/QQ号/手机号">
          <x-icon slot="label" class="icon-primary" type="ios-search-strong" size="28"></x-icon>
        </x-input>
      </group>
      <div class="wrap">
        <span>我的微信号：moohng</span>
      </div>
      <group>
        <cell v-for="cell in cells" :key="cell" is-link :title="cell.title">
          <!-- <img slot="icon" src="cell.img" alt=""> -->
          <template slot="inline-desc">{{ cell.subtitle }}</template>
        </cell>
      </group>
    </template>
  </view-box>
</template>

<script>
import { ViewBox, XHeader, XInput, Group, Cell } from 'vux'

export default {
  name: 'add-friend',
  data () {
    return {
      username: '',

      cells: [
        {
          img: '',
          title: '雷达加朋友',
          subtitle: '添加身边的朋友'
        },
        {
          img: '',
          title: '面对面建群',
          subtitle: '与身边的朋友进入同一个群聊'
        },
        {
          img: '',
          title: '扫一扫',
          subtitle: '扫描二维码名片'
        },
        {
          img: '',
          title: '手机联系人',
          subtitle: '添加手机通讯录中的朋友'
        },
        {
          img: '',
          title: '公众号',
          subtitle: '获取更多资讯和服务'
        }
      ]
    }
  },
  methods: {
    search () {
      // 跳转
      this.$router.replace({
        name: 'detail',
        query: {
          mode: 'push',
          username: this.username
        }
      })
    }
  },
  components: {
    ViewBox,
    XHeader,
    XInput,
    Group,
    Cell
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.add {
  .icon-primary {
    fill: $tintColor;
  }
  .wrap {
    margin: 8px auto 38px;

    font-size: 14px;
    text-align: center;
  }
}
</style>
