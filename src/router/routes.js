import authPages from './auth'
import mainPages from './main'
import profilePages from './profile'

// Chat
import Chat from '@/pages/message/chat/chat'
// Contact
import AddFriend from '@/pages/contact/add-friend'
import Online from '@/pages/contact/online'
import Detail from '@/pages/contact/detail'

import PlayGround from '@/pages/playground'

export default [
  {
    path: '/',
    redirect: { name: 'message' }
  },
  // 授权页
  ...authPages,
  // 主界面
  mainPages,
  // Profile
  ...profilePages,
  // Message
  {
    path: '/wchat/message/chat',
    name: 'chat',
    component: Chat
  },
  // Contact
  {
    path: '/wchat/contact/add',
    name: 'add',
    component: AddFriend
  },
  // Online
  {
    path: '/wchat/contact/online',
    name: 'online',
    component: Online
  },
  // Detail
  {
    path: '/wchat/contact/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/playground',
    name: 'playground',
    component: PlayGround,
    meta: {
      title: 'Playground'
    }
  }
]
