import EventEmitter from 'events'

const url = process.env.NODE_ENV === 'production' ? 'ws://39.108.137.234:30334/' : 'ws://localhost:30600'

export default {
  install(Vue) {
    // 连接
    Vue.prototype.$connect = Vue.$connect = this.connect = _ => {
      return new Promise((resolve, reject) => {
        this.ws = new WebSocket(url)
        // 建立连接
        this.ws.onopen = _ => {
          console.log('已建立连接')
          resolve()
        }
        // 连接出错
        this.ws.onerror = _ => {
          console.log('连接出错')
          reject('ws连接出错')
        }
        // 收到消息
        this.ws.onmessage = message => {
          this.eventEmitter = new EventEmitter()
          // 消息分类处理
          this.eventEmitter.emit('chat', message)
        }
        // 关闭
        this.ws.onclose = _ => {
          console.log('ws已断开')
          reject('ws已断开')
        }
      })
    }
    // 发送
    Vue.prototype.$send = Vue.$send = this.send = message => {
      this.ws.send(message)
    }
    // 接收聊天消息
    Vue.prototype.$receive = Vue.$receive = this.receive = cb => {
      this.eventEmitter.on('chat', cb)
    }
  }
}
