
// 聊天记录列表
let chatList = {
    "示例1": {
        name: '示例1',
        messages: [
            {
                type: 'send',
                time: '14:32',
                text: '这可能是条假的聊天记录'
            }
        ]
    },
    "示例2": {
        name: '示例2',
        messages: [
            {
                type: '',
                time: '14:32',
                text: '这可能是条假的聊天记录'
            }
        ]
    }
}

let state = {
    // 聊天记录
    chatList
}

export default state
