import { get, post } from '../utils/request'

const plugin = Vue => {
  Vue.prototype.$get = Vue.$get = (...args) => {
    return get(...args)
  }
  Vue.prototype.$post = Vue.$post = (...args) => {
    return post(...args)
  }
}

export default plugin
