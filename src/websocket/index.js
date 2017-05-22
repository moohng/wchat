// import WebSocket from 'ws'
import WSocket from '@/plugins/WSocket'
import store from '@/vuex/store'


// const url = 'ws://192.168.16.106:9999/wechat'
const ws = new WSocket()

// 监听
ws.on('open', () => {
    console.log('已连接')

    // 发送初始化信息
    // const data = {
    //     from: {
    //         account: 123456,
    //         token: '123456'
    //     },
    //     ms_type: 'CS10000'
    // }
    // ws.send(JSON.stringify(data))
})
ws.on('message', data => {
    console.log(data)
    // 解析消息
    try {
        let message = JSON.parse(data)

        if (message.from === store.getters.account) {
            console.log('发送成功！')
        }
        else {

            let type = 'receive'
            if (message.to === "聊天室") {
                type = 'all'
            }
            store.commit('addMessage', { message, type })
        }
    }
    catch(err) {
        const message = data
        console.log('发送失败！')
    }

})

export default ws
