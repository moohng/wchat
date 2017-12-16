import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import profile from './modules/profile'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    profile
  }
})

store.types = types

export { types }
export default store
