import router from '../router'
import Vue from 'vue'

let mutations = {
    // send
    send ({ messages }, text) {
        Vue.set(messages, messages.length, {
            type: 'send',
            text
        })
    },
    // receive
    receive ({ messages }, text) {
        Vue.set(messages, messages.length, {
            type: 'receive',
            text
        })
    }
}

export default mutations
