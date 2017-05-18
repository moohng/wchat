import { send } from '@/plugins/w-request'
import ws from '@/websocket'

const actions = {
    send ({ commit }, message) {

        commit('addMessage', message)

        send(message.text)
        .then(res => {
            console.log('response success: ', res)
            if (res.code === 100000) {
                // 封装消息
                const time = new Date()
                const message = {
                    type: 'receive',
                    time: time.getHours() + ':' + time.getMinutes(),
                    text: res.text
                }

                commit('addMessage', message)
            }
        })
        .catch(err => {

            console.log('response error: ', err)
        })
    },

    sendText ({ commit }, message) {

        if (ws.sendText(message.text)) {
            commit('addMessage', message)
        }
        else {
            ws.init()
        }

    }
}

export default actions
