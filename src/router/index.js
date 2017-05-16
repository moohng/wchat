import Vue from 'vue'
import Router from 'vue-router'
// 主界面
import Wchat from '@/components/wchat'
import Explore from '@/components/explore/explore'
import Profile from '@/components/profile/profile'
import Contact from '@/components/contact/contact'
import Message from '@/components/message/message'
// Profile
import Me from '@/components/profile/me/me'
import Setting from '@/components/profile/setting/setting'
// Chat
import Chat from '@/components/message/chat/chat'

// Login
import Login from '@/components/login/login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'login'}
        },
        {
            path: '/wellcome/login',
            name: 'login',
            component: Login
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

        {
            path: '/wchat/message/chat',
            name: 'chat',
            component: Chat
        }
    ]
})
