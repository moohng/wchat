import Vue from 'vue'

let mutations = {
    // 将当前会话移动到最前端
    moveToFirst ({ sessionList }, index) {
        if (!index) return

        const currentSession = sessionList.splice(index, 1)
        sessionList.unshift(currentSession)
    },
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
                this.moveToFirst({ sessionList }, _index)
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
