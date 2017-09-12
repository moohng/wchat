import { LoadingPlugin, ToastPlugin } from 'vux'

const plugin = {
  install(Vue) {
    // 注册
    Vue.use(LoadingPlugin)
    Vue.use(ToastPlugin)

    // toast
    Vue.prototype.$toast = Vue.$toast = options => {
      if (options && options.text) {
        Vue.$vux.toast.show(options)
      } else {
        Vue.$vux.toast.text(options, 'bottom')
      }
    }
    // loading
    Vue.prototype.$loading = Vue.$loading = options => {
      if (!options || !options.text) {
        options = { text: options || '加载中...' }
      }
      Vue.$vux.loading.show(options)
    }
    // hide
    Vue.prototype.$hide = Vue.$hide = options => {
      Vue.$vux.toast.hide()
      Vue.$vux.loading.hide()
    }
  }
}

export default plugin
