// import WebSocket from 'ws'
import WSocket from '@/plugins/WSocket'

import add from './add'
import chat from './chat'
import chatroom from './chatroom'

const ws = new WSocket()

// 监听
ws.on('open', () => {

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

    switch (message.code) {
        case 100:   // 添加好友
            add(message)
            break
        case 200:   // 私聊
            chat(message)
            break
        case 300:   // 聊天室
            chatroom(message)
            break
        default:
    }

})

export default ws
