import WChat from '@/pages/wchat'
import Explore from '@/pages/explore'
import Profile from '@/pages/profile'
import Contact from '@/pages/contact'
import Message from '@/pages/message'

export default {
  path: '/wchat',
  name: 'wchat',
  component: WChat,
  children: [
    {
      path: 'message',
      name: 'message',
      components: {
        default: Message,
        'header-right': Message.HeaderRight
      },
      meta: {
        title: '微信',
        tabIndex: 0
      }
    },
    {
      path: 'contact',
      name: 'contact',
      components: {
        default: Contact,
        'header-right': Contact.HeaderRight
      },
      meta: {
        title: '通讯录',
        tabIndex: 1
      }
    },
    {
      path: 'explore',
      name: 'explore',
      component: Explore,
      meta: {
        title: '发现',
        tabIndex: 2
      }
    },
    {
      path: 'profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: '我',
        tabIndex: 3
      }
    }
  ]
}
