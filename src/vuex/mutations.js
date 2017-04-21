import router from '../router'
import Vue from 'vue'

let mutations = {
    // update chat log
    updateChatLog ({ chatLog }, index) {
        // 移动当前聊天列表 到最前端
        const current = chatLog.splice(index, 1)
        chatLog.unshift(current[0])
    },
    // add message
    addMessage ({ chatLog }, message) {
        chatLog[0].messages.push(message)
    }
}

export default mutations
