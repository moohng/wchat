import { get } from '../../utils/request'
import * as types from '../mutation-types'
import * as api from '../../services/api'

export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {
    name: state => state.userInfo.name,
    username: state => state.userInfo.username,
    headIcon: state => state.userInfo.headIcon
  },
  actions: {
    async fetchUserInfo ({ commit }) {
      try {
        const data = await get(api.fetchUserInfo)
        commit(types.SAVE_USER_INFO, { userInfo: data })
      } catch (err) {
        console.log('error', err)
      }
    }
  },
  mutations: {
    [types.SAVE_USER_INFO] (state, { userInfo }) {
      state.userInfo = userInfo
    }
  }
}
