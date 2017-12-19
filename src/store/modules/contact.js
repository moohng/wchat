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
      const letters = 'ABCDEFGHJKLMNOPQRSTWXYZ'.split('')
      const zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')
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
