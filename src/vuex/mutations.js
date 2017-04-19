import router from '../router'
import Vue from 'vue'

let mutations = {
    // send
    send ({ chatLog }, text) {
        chatLog[0].messages.push({
            type: 'send',
            text
        })
    },
    // receive
    receive ({ chatLog }, text) {
        chatLog[0].messages.push({
            type: 'receive',
            text
        })
    }
}

export default mutations
