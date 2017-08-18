// import 'babel-polyfill'
// 或者在 webpack.config.js 中添加

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

// 全局样式
import './assets/common.scss'

import WRequest from './plugins/WRequest'
Vue.use(WRequest)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
