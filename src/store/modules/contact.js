import { get } from '../../utils/request'
import * as types from '../mutation-types'
import * as api from '../../services/api'

export default {
  namespaced: true,
  state: {
    userContact: []
  },
  getters: {
    userContact: state => {
      const list = state.userContact.sort((a, b) => a.name.localeCompare(b.name))
      console.log('------', list)
      /* eslint-disable */
      // const letters = 'ABCDEFGHJKLMNOPQRSTWXYZ'.split('').reverse()
      // const zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('').reverse()
      // const groupList = letters.reduce((pre, curr, index, arr) => {
      //   const group = list.filter(({ name }) => {
      //     return (name.localeCompare(curr.toLowerCase()) >= 0 && name.localeCompare(zh.reverse()[index]) < 0) ||
      //            (name.localeCompare(arr.reverse()[index]) >= 0)
      //   })
      //   group.length ? {
      //     ...pre,
      //     [curr]: group
      //   } : pre
      // }, {})
      return list
    }
  },
  actions: {
    async fetchUserContact ({ commit }) {
      try {
        const data = await get(api.fetchUserContact)
        commit(types.SAVE_USER_CONTACT, { userContact: data })
      } catch (err) {
        console.log('error', err)
      }
    }
  },
  mutations: {
    [types.SAVE_USER_CONTACT] (state, { userContact }) {
      state.userContact = userContact
    }
  }
}
