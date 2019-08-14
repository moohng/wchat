import Login from '@/pages/wellcome/login'
import Register from '@/pages/wellcome/register'

export default [
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
    component: Register,
    meta: {
      title: '注册'
    }
  }
]
