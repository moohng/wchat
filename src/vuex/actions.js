import ws from '@/websocket'

const actions = {

    vx_send ({ commit }, message) {

        // 配置格式
        const data = {
            from: {
                account: message.from,
                token: '123456'
            },
            ms: message.text,
            ms_type: 'CN00010'
        }

        if (ws.send(JSON.stringify(data))) {
            commit('addMessage', message)
        }
        else {
            ws.init()
        }

    }

}

export default actions
