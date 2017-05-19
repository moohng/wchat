
import createIO from 'socket.io-client'

const host = 'ws://127.0.0.1:3000/chatroom?username=moohng'
const io = createIO(host)

io.on('connect', () => {
    console.log('已连接')
})
io.on('disconnect', () => {
    console.log('断开连接')
})

export default io
