import { send } from '@/plugins/w-request'

const actions = {
    send ({ commit }, text) {

        send(text)
        .then(res => {
            console.log('response: ', res.text)
        })
        .catch(err => {
            console.log('response: ', err)
        })
    }
}

export default actions
