import * as types from './mutation-types'

const mutations = {
  [types.UPDATE_LOADING_STATUS] (state, { loading }) {
    const loadingNum = state.loading
    state.loading = loading ? loadingNum + 1 : loadingNum - 1
  }
}

export default mutations
