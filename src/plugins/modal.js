import UIModal from '@/components/modal/modal'
import UIConfirm from '@/components/modal/confirm'

// Vue 插件
const modal = function (Vue) {

    const create = function (type, text) {
        const Loading = Vue.extend({
            template: '<UIModal :text="text" :type="type"/>',
            data () {
                return {
                    text,
                    type
                }
            },
            components: { UIModal }
        })
        modal.el = new Loading().$mount().$el
        document.body.appendChild(modal.el)
    }

    // 等待弹框
    Vue.prototype.$loading = modal.loading = function (text = 'you are right!') {

        create('loading', text)
    }
    // 完成提示
    Vue.prototype.$completed = modal.completed = function (text, delay) {

        create('completed', text)
        // 默认 3s 后自动关闭
        setTimeout(() => modal.close(), delay || 3000)
    }
    // 错误提示
    Vue.prototype.$error = modal.error = function (text, delay) {

        create('error', text)
        // 默认 3s 后自动关闭
        setTimeout(() => modal.close(), delay || 3000)
    }

    // 关闭当前弹框
    Vue.prototype.$close = modal.close = function () {

        modal.el.parentNode.removeChild(modal.el)
    }

    // 确认框
    Vue.prototype.$confirm = modal.confirm = function (text, cb) {

        let title, ok, cancel
        if (typeof text === 'object') {
            title = text.title
            ok = text.ok
            cancel = text.cancel
            text = text.text
        }

        const Confirm = Vue.extend({
            template: '<UIConfirm :text="text" :title="title"\
                        :ok="ok" :cancel="cancel"\
                        @confirm="confirm"/>',
            data () {
                return {
                    text,
                    title,
                    ok,
                    cancel
                }
            },
            methods: {
                confirm (value) {
                    // 关闭框口
                    modal.close()
                    // 执行回调
                    cb(value)
                }
            },
            components: { UIConfirm }
        })
        modal.el = new Confirm().$mount().$el
        document.body.appendChild(modal.el)
    }
}

export default modal
