// 主界面
import WChat from '@/pages/wchat'
import Explore from '@/pages/explore'
import Profile from '@/pages/profile'
import Contact from '@/pages/contact'
import Message from '@/pages/message'
// Profile
import Me from '@/pages/profile/me'
import Setting from '@/pages/profile/setting'
// Chat
import Chat from '@/pages/message/chat/chat'
// Contact
import AddFriend from '@/pages/contact/add-friend'
import Online from '@/pages/contact/online'
import Detail from '@/pages/contact/detail'

// Login
import Login from '@/pages/wellcome/login'
// Register
import Register from '@/pages/wellcome/register'

export default [
  {
    path: '/',
    redirect: { name: 'message' }
  },
  // 登录
  {
    path: '/wellcome/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  // 注册
  {
    path: '/wellcome/register',
    name: 'register',
    component: Register
  },
  // 主界面
  {
    path: '/wchat',
    name: 'wchat',
    component: WChat,
    children: [
      {
        path: 'message',
        name: 'message',
        component: Message
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact
      },
      {
        path: 'explore',
        name: 'explore',
        component: Explore
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },
  // Profile
  {
    path: '/wchat/profile/me',
    name: 'me',
    component: Me
  },
  {
    path: '/wchat/profile/setting',
    name: 'setting',
    component: Setting
  },
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
  }
]
