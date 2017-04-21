import { send } from '@/plugins/w-request'

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
    }
}

export default actions
