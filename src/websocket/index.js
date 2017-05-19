// import WebSocket from 'ws'
import WSocket from '@/plugins/WSocket'
import store from '@/vuex/store'


const url = 'ws://localhost:3000/ws?username=moohng'
const ws = new WSocket(url)

// 监听
ws.on('open', () => {
    console.log('已连接')
})
ws.on('message', data => {
    console.log('接收到消息', data)
    const time = new Date()
    const message = {
        type: 'receive',
        time: time.getHours() + ':' + time.getMinutes(),
        text: data
    }

    store.commit('addMessage', message)
})

export default ws
