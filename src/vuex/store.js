import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

let state = {
    titleList: ['微信', '通讯录', '发现', '我'],

    pushOrPop: 'push',
    popStack: []
}

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
})
