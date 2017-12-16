import Me from '@/pages/profile/me'
import Setting from '@/pages/profile/setting'
import More from '@/pages/profile/more'

export default [
  {
    path: '/wchat/profile/me',
    name: 'me',
    component: Me,
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/wchat/profile/me/more',
    name: 'more',
    component: More,
    meta: {
      title: '更多信息'
    }
  },
  {
    path: '/wchat/profile/setting',
    name: 'setting',
    component: Setting,
    meta: {
      title: '设置'
    }
  }
]
