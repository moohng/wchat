
// 聊天记录列表
let chatLog = [
    {
        message: []
    }
]

let state = {
    titleList: ['微信', '通讯录', '发现', '我'],

    messages: [{
        type: 'send',
        text: '这里是假装了聊天记录'
    }, {
        type: 'receive',
        text: '请不要当真'
    }, {
        type: 'receive',
        text: '假的聊天记录'
    }, {
        type: 'send',
        text: '还是假的聊天记录'
    }]
}

export default state
