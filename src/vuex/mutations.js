import Vue from 'vue'
import store from './store'

let mutations = {

    // add message
    addMessage ({ sessionList }, { message, type}) {

        let title
        switch (type) {
            case 'send':
                title = message.to
                break
            case 'receive':
                title = message.from
                break
            case 'all':
                title = '聊天室'
                break
            default:
        }

        // 判断会话是否存在
        let _index = false
        sessionList.forEach((session, index) => {
            if (session.title === title) {
                // 存在   记录索引
                _index = index
                return
            }
        })

        if (_index !== false) {
            // 存在
            sessionList[_index].messages.push(message)
            // 移动到最前端
            if (_index > 0) {
                // const currentSession = sessionList.splice(_index, 1)
                // sessionList.unshift(currentSession)
            }
        }
        else {
            // 不存在  添加
            const session = {
                title,
                messages: [message]
            }
            sessionList.unshift(session)
        }
    }
}

export default mutations
