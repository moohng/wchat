import UIAlert from './ui-alert'

class Alert {

}

Alert.installed = false
Alert.install = function (Vue, options) {

    Vue.prototype.$alert = function (text = 'you are right!') {

        // 弹窗组件未完成
        let vAlert = Vue.extend({
            template: '<UIAlert :text="text" @close="close"/>',
            data () {
                return {
                    text
                }
            },
            methods: {
                close () {
                    this.$el.remove()
                }
            },
            components: { UIAlert }
        })
        let ee = new vAlert().$mount().$el
        document.body.appendChild(ee)
    }
}

export default Alert
