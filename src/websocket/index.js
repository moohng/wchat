// import WebSocket from 'ws'
import WSocket from '@/plugins/WSocket'
import store from '@/vuex/store'


// const url = 'ws://192.168.16.106:9999/wechat'
const ws = new WSocket()

// 监听
ws.on('open', () => {

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
ws.on('message', message => {
    // 接收到消息
    console.log(message)
    // 解析消息
    try {
        message = JSON.parse(message)
    }
    catch(err) {
        console.log('错误消息')
        return
    }

    if (message.to && message.to === 'all') {
        // 聊天室
        store.commit('addMessage', { message, type: 'all' })
    }
    else if (message.from) {
        // 个人消息
        store.commit('addMessage', { message, type: 'receive' })
    }

})

export default ws
