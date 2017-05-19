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

        if (chatList['聊天室']) {
            chatList['聊天室'].messages.push(message)
        }
        else {
            const list = {
                name: "聊天室",
                messages: [message]
            }
            Vue.set(chatList, '聊天室', list)
        }
    },
    // add chat list
    addList ({ chatList }, key) {
        const list = {
            name: key,
            messages: []
        }
        Vue.set(chatList, key, list)
    }
}

export default mutations
