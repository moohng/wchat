
class WSocket {
    constructor ({
        host,
        open,
        message,
        error,
        close
    } = {}) {

        this.host = host
        this.open = open
        this.message = message
        this.error = error
        this.close = close
    }

    // 初始化 连接
    init (host = this.host) {

        this.socket = new WebSocket(host)
        this.socket.onopen = this.onopen.bind(this)
        this.socket.onmessage = this.onmessage.bind(this)
        this.socket.onerror = this.onerror.bind(this)
        this.socket.onclose = this.onclose.bind(this)
    }

    sendText (text) {
        if (this.socket.readyState != WebSocket.OPEN) return false

        this.socket.send(text)
        return true
    }

    close (code, reason) {
        this.socket.close(code, reason)
    }

    // 默认方法
    onopen (e) {

        this.open && this.open('已连接')
    }
    onmessage (mEvent) {

        this.message && this.message(mEvent.data)
    }
    onerror (e) {

        this.error && this.error(e)
    }
    onclose (cEvent) {

        this.close && this.close('连接已断开')
    }
}

WSocket.installed = false
WSocket.install = function (Vue, options) {
    if (this.installed) return


    this.installed = true
}

export default WSocket
