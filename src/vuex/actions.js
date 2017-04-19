import { send } from '@/plugins/w-request'

const actions = {
    send ({ commit }, text) {

        commit('send', text)
        send(text)
        .then(res => {
            console.log('response success: ', res)
            if (res.code === 100000) {
                commit('receive', res.text)
            }
        })
        .catch(err => {
            console.log('response error: ', err)
        })
    }
}

export default actions
