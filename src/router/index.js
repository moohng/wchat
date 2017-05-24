import Vue from 'vue'
import Router from 'vue-router'
// 主界面
import Wchat from '@/components/wchat'
import Explore from '@/components/explore/explore'
import Profile from '@/components/profile/profile'
import Contact from '@/components/contact/contact'
import Message from '@/components/message/message'
// Profile
import Me from '@/components/profile/me'
import Setting from '@/components/profile/setting'
// Chat
import Chat from '@/components/message/chat/chat'
// Contact
import AddFriend from '@/components/contact/add-friend'

// Login
import Login from '@/components/wellcome/login'
// Register
import Register from '@/components/wellcome/register'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'message'}
        },
        // 登录
        {
            path: '/wellcome/login',
            name: 'login',
            component: Login
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
            component: Wchat,
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
        }
    ]
})
