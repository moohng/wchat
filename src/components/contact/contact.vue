<template>
  <div class="contact">
    <search></search>
    <group :gutter="0">
      <cell v-for="title, index in titles" value-align="left" @click.native.stop="tabSelect(index)">
        <span slot="title">{{ title }}</span>
      </cell>
    </group>
    <group v-for="group in friendList">
      <cell v-for="friend in group" value-align="left" @click.native.stop="detail(friend)">
        <span slot="title">{{ friend }}</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Search, Group, Cell } from 'vux'

export default {
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
        }
        else {
          toList.push(group)
          group = []
          group.push(list[i])
      }

        if (i === list.length - 1) {
          toList.push(group)
        }
        else {
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
          this.$router.replace({
            name: 'chat',
            query: {
              mode: 'push',
              title: '聊天室'
            }
          })
          break
        case 1:
          this.$router.replace({
            name: 'online',
            query: {
              mode: 'push'
            }
          })
          break
        default:
      }

    },

    detail (username) {
      this.$router.replace({
        name: 'detail',
        query: {
          mode: 'push',
          username
        }
      })
    }
  },
  mounted () {
    // 获取通讯录列表
    this.$getFriends((err, friends) => {
      if (err) {
        console.log(err)
        return
      }

      this.friends = friends
    })
  },
  components: {
    Group,
    Cell,
    Search
  }
}
</script>

<style lang="scss" scoped>
.contact {

}
</style>
