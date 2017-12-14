import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store, { types } from '../store'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  store.commit(types.UPDATE_LOADING_STATUS, { loading: true })
  next()
})
router.afterEach((to, from) => {
  store.commit(types.UPDATE_LOADING_STATUS, { loading: false })
  document.title = to.meta.title
})

export default router
