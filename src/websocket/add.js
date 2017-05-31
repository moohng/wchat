import store from '@/vuex/store'
import modal from '@/plugins/modal'
import request from '@/plugins/WRequest'

export default message => {
    // 添加好友请求
    modal.confirm({
        text: message.from + ' 请求添加您为好友？',
        title: '好友请求',
        ok: '接受',
        cancel: '拒绝'
    }, value => {
        // yes or no
        if (value) {
            request.acceptFriend(message.from, err => {
                if (err) {
                    console.log(err)
                    return
                }

                // 已接受好友请求
                console.log('已接受好友请求')
            })
        }
        else {

        }
    })
}
