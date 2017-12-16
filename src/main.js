
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'babel-polyfill'
// 或者在 webpack.config.js 中添加

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './services/mock'
// 全局样式
import './styles/common.scss'

import common from './plugins/common'
import request from './plugins/request'

Vue.use(common)
Vue.use(request)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
