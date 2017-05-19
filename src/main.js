// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'babel-polyfill'
// 或者在 webpack.config.js 中添加

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// 全局样式
import './assets/common.scss'

import Modal from './plugins/modal'
Vue.use(Modal)

// web socket
import ws from '@/websocket'
ws.init()


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ws,
    template: '<App />',
    components: { App }
})
