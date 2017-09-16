import EventEmitter from 'events'

const url = process.env.NODE_ENV === 'production' ? 'ws://39.108.137.234:30334/' : 'ws://localhost:30600'

let ws

export default {
  install(Vue) {
    // 连接
    Vue.prototype.$connect = Vue.$connect = this.connect = _ => {
      return new Promise((resolve, reject) => {
        ws = new WebSocket(url)
        ws.eventEmitter = new EventEmitter()
        // 建立连接
        ws.onopen = _ => {
          console.log('已建立连接')
          resolve()
        }
        // 连接出错
        ws.onerror = _ => {
          console.log('连接出错')
          reject('ws连接出错')
        }
        // 收到消息
        ws.onmessage = message => {
          // 消息分类处理
          console.log('接收到消息')
          ws.eventEmitter.emit('chat', message)
        }
        // 关闭
        ws.onclose = _ => {
          console.log('ws已断开')
          reject('ws已断开')
        }
      })
    }
    // 发送
    Vue.prototype.$send = Vue.$send = this.send = message => {
      ws.send(message)
    }
    // 接收聊天消息
    Vue.prototype.$receive = Vue.$receive = this.receive = cb => {
      ws.eventEmitter.on('chat', cb)
    }
  }
}
