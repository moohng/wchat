import Vue from 'vue'
import Router from 'vue-router'
import Wchat from '@/components/wchat'
import Explore from '@/components/explore/explore'
import Profile from '@/components/profile/profile'
import Contact from '@/components/contact/contact'
import Message from '@/components/message/message'

import Me from '@/components/profile/me/me'
import Setting from '@/components/profile/setting/setting'

import Chat from '@/components/message/chat/chat'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {name: 'message'}
        },
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
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },

        {
            path: '/chat',
            name: 'chat',
            component: Chat
        }
    ]
})
