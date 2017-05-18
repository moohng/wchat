import { sendText, init } from '@/websocket'

const actions = {

    send ({ commit }, message) {

        if (sendText(message.text)) {
            commit('addMessage', message)
        }
        else {
            init()
        }

    }
}

export default actions
