import ws from '@/websocket'

const actions = {

    vx_send ({ commit }, message) {

        if (ws.send(message.text)) {
            commit('addMessage', message)
        }
        else {
            ws.init()
        }

    }

}

export default actions
