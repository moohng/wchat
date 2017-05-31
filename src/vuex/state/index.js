
// 会话列表
let sessionList = [
    {
        title: '聊天室',
        messages: [
            {
                from: '小三',
                to: '聊天室',
                content: {
                    text: '现在方便吗？'
                },
                time: '12:00'
            },
            {
                from: '老王',
                to: '聊天室',
                content: {
                    text: '你不要来烦我'
                },
                time: '12:04'
            }
        ]
    }
]
// 好友列表
let friendList = [
    'moohng',
    'b',
    'bbbbbb'
]


let state = {
    user: {},
    // 聊天记录
    sessionList,

    friendList,

    newFriendList: [],

}

export default state
