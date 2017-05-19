import UIModal from '@/components/common/modal'

class Modal {
    constructor () {
    }
}

Modal.installed = false
Modal.install = function (Vue, options) {

    const modal = new Modal()

    Vue.prototype.$loading = function (text = 'you are right!') {

        // 弹窗组件未完成
        const Loading = Vue.extend({
            template: '<UIModal :text="text"/>',
            data () {
                return {
                    text
                }
            },
            components: { UIModal }
        })
        modal.el = new Loading().$mount().$el
        document.body.appendChild(modal.el)
    }

    Vue.prototype.$close = function () {
        // 关闭所有 Modal
        modal.el.parentNode.removeChild(modal.el)
        // modal.el.remove()
    }
}

export default Modal
