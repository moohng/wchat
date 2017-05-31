import store from '@/vuex/store'

export default message => {
    // 聊天室
    store.commit('addMessage', { message, type: 'all' })
}
