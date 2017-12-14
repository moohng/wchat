import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})

store.types = types

export { types }
export default store
