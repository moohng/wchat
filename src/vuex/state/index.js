
// 会话列表
let sessionList = [
  {
    id: '12345',
    name: '聊天室',
    members: ['moohng', 'qqqqqq'],
    messages: [
      {
        from: { username: 'moohng' },
        content: {
          text: '现在方便吗？'
        },
        date: 8786785656
      },
      {
        from: { username: 'qqqqqq' },
        content: {
          text: '你不要来烦我你不要来烦我你不要来烦我你不要来烦我你不要来烦我你不要来烦我'
        },
        date: 232132131
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
