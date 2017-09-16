
// 会话列表
const sessionList = [
  {
    id: '12345',
    name: 'qqqqqq',
    head_icon: 'http://iph.href.lu/200x200?text=%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F',
    members: ['moohng', 'qqqqqq'],
    messages: [
      {
        from: { username: 'moohng' },
        content: {
          text: '现在方便吗？'
        },
        date: 1505485259436
      },
      {
        from: { username: 'qqqqqq' },
        content: {
          text: '你不要来烦我你不要来烦我你不要来烦我你不要来烦我你不要来烦我你不要来烦我'
        },
        date: 150595251136
      }
    ]
  }
]
// 好友列表
const friendList = [
  'moohng',
  'b',
  'bbbbbb'
]


const state = {
  // user: {},
  // 聊天记录
  sessionList,

  friendList,

  newFriendList: [],
}

export default state
