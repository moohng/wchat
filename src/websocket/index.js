import WSocket from '@/plugins/WSocket'
import store from '@/vuex/store'

const host = 'ws://127.0.0.1:3000/chatroom?username=moohng'
const message = function (text) {

    const time = new Date()
    const message = {
        type: 'receive',
        time: time.getHours() + ':' + time.getMinutes(),
        text
    }

    store.commit('addMessage', message)
}
const open = function (text) {
    console.log(text)
}
const error = function (err) {
    console.log(err)
}
const close = function (text) {
    console.log(text)
}

import Vue from 'vue'
Vue.use(WSocket)

export default new WSocket({
    host,
    message,
    open,
    error,
    close
})
