import ws from '@/websocket'

const actions = {

    vx_send ({ commit, getters }, message) {

        // 配置格式
        // const data = {
        //     from: {
        //         account: message.from,
        //         token: '123456'
        //     },
        //     ms: message.text,
        //     ms_type: 'CN00010'
        // }
        //


        if (ws.send(JSON.stringify(message))) {
            commit('addMessage', { message, type: 'send' })
        }
        else {
            const url = 'ws://23.105.193.214:3000/ws?username=' + getters.account
            ws.init(url)
        }

    }

}

export default actions
