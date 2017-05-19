// import WebSocket from 'ws'
import WSocket from '@/plugins/WSocket'
import store from '@/vuex/store'


// const url = 'ws://localhost:3000/ws?username=moohng'
const url = 'ws://192.168.16.106:9999/wechat'
const ws = new WSocket(url)

// 监听
ws.on('open', () => {
    console.log('已连接')

    // 发送初始化信息
    const data = {
        from: {
            account: 123456,
            token: '123456'
        },
        ms_type: 'CS10000'
    }
    ws.send(JSON.stringify(data))
})
ws.on('message', data => {
    // 解析消息
    const json_data = JSON.parse(data)
    console.log('接收到消息', json_data)

    if (json_data.content.from.account === store.getters.account) {
        console.log('发送成功！')
    }
    else {
        const time = new Date()
        const message = {
            type: 'receive',
            time: time.getHours() + ':' + time.getMinutes(),
            text: json_data.content.ms
        }

        store.commit('addMessage', message)
    }

})

export default ws
