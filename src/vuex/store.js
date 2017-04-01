import Vue from 'vue'
import Vuex from 'vuex'

let state = {
    titleList: ['微信', '通讯录', '发现', '我']
}

Vue.use(Vuex)

export default new Vuex.Store({
    state
})
