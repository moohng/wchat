import store from '@/vuex/store'

export default message => {
    // 个人消息
    store.commit('addMessage', { message, type: 'receive' })
}
