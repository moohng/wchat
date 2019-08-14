import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './services/mock'

import './styles/common.scss'

import common from './plugins/common'
import request from './plugins/request'

Vue.config.productionTip = false

Vue.use(common)
Vue.use(request)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
