
let message = {
    type: 'send',
    // 这可能是一个假的时间
    time: '14:29',
    text: '这可能是条假的聊天记录'
}
// 聊天记录列表
let chatLog = [
    {   name: '大乔',
        icon_url: '',
        messages: [message]
    },
    {   name: '貂蝉',
        icon_url: '',
        messages: [message]
    },
    {   name: '小乔',
        icon_url: '',
        messages: [message]
    },
    {   name: '西施',
        icon_url: '',
        messages: [message]
    },
    {   name: '虞姬',
        icon_url: '',
        messages: [message]
    },
    {   name: '黄蓉',
        icon_url: '',
        messages: [message]
    },
    {   name: '小龙女',
        icon_url: '',
        messages: [message]
    },
    {   name: '妲己',
        icon_url: '',
        messages: [message]
    },
    {   name: '褒姒',
        icon_url: '',
        messages: [message]
    },
    {   name: '嫦娥',
        icon_url: '',
        messages: [message]
    }
]

let state = {
    titleList: ['微信', '通讯录', '发现', '我'],
    // 聊天记录
    chatLog,
    // 当前聊天 索引
    currentChatIndex: 0
}

export default state
