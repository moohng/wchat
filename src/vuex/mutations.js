import router from '../router'
import Vue from 'vue'

let mutations = {
    // update chat log
    updateChatLog ({ chatList }, index) {
        // 移动当前聊天列表 到最前端
        const current = chatList.splice(index, 1)
        chatList.unshift(current[0])
    },
    // add message
    addMessage ({ chatList }, message) {
        chatList[0].messages.push(message)
    },
    // add chat list
    addList ({ chatList }, key) {
        const list = {
            name: key,
            messages: []
        }
        chatList[key] = list
    }
}

export default mutations
