import Vue from 'vue'

let mutations = {
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
