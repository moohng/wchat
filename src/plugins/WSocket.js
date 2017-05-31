import { EventEmitter } from 'events'

class WSocket extends EventEmitter {

    // 初始化 连接
    init (url, cb) {
        this.cb = cb
        this.url = url

        this.socket = new WebSocket(this.url)
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onclose = this.onclose.bind(this)
    }

    send (data) {
        if (this.socket.readyState != WebSocket.OPEN) {
            this.init(this.url);
            return false
        }

        this.socket.send(data)
        return true
    }

    close (code, reason) {
        this.socket.close(code, reason)
    }

    // 默认方法
    onopen (e) {

        this.emit('open', '已连接')
        this.cb && this.cb()
    }
    onmessage (e) {

        this.emit('message', e.data)
    }
    onerror (e) {

        this.emit('error', '连接错误')
        this.cb && this.cb('连接错误')
    }
    onclose (e) {

        this.emit('close', '连接已断开')
    }
}

export default WSocket
