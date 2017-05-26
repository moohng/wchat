import ws from '@/websocket'

const actions = {

    vx_send ({ commit }, message) {

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
        let type
        if (message.to === 'all') {
            type = 'all'
        }
        else {
            type = 'send'
        }

        if (ws.send(JSON.stringify(message))) {
            commit('addMessage', { message, type })
        }

    },

    get_online ({ commit }) {

    }

}

export default actions
