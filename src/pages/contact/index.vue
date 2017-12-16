<template>
  <div class="contact">
    <search :autoFixed="false"></search>
    <group :gutter="0">
      <cell v-for="(title, index) in titles" :key="index" @click.native.stop="tabSelect(index)">
        <span slot="title">{{ title }}</span>
      </cell>
    </group>
    <group v-for="(group, index) in friendList" :key="index">
      <cell v-for="friend in group" :key="friend" @click.native.stop="detail(friend)">
        <span slot="title">{{ friend }}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'
import HeaderRight from './header-right'

export default {
  name: 'contact',
  data () {
    return {
      // 固定组件
      titles: ['聊天室', '在线用户'],
      // 好友列表
      friends: []
    }
  },
  computed: {
    friendList () {
      // 排序 分组
      if (this.friends.length === 0) return []

      const list = this.friends.sort()
      let toList = []
      let group = []
      let last = list[0].substr(0, 1)
      for (let i = 0; i < list.length; i++) {
        const current = list[i].substr(0, 1)
        if (current === last) {
          group.push(list[i])
        } else {
          toList.push(group)
          group = []
          group.push(list[i])
        }
        if (i === list.length - 1) {
          toList.push(group)
        } else {
          last = current
        }
      }
      return toList
    }
  },
  methods: {
    tabSelect (index) {
      switch (index) {
        case 0:
          this.$router.push({name: 'chat'})
          break
        case 1:
          this.$router.push({name: 'online'})
          break
        default:
      }
    },

    detail (username) {
      this.$router.push({
        name: 'detail',
        query: {
          username
        }
      })
    }
  },
  components: {
    Group,
    Cell,
    Search
  },
  HeaderRight
}
</script>
