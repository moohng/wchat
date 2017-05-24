import { ajax } from 'jquery'
import ws from '../websocket'

const request = function(Vue) {

    const _baseURL = 'http://localhost:3000'

    // 登录
    Vue.prototype.$login = function (data, cb) {

        const url = _baseURL + '/signin'
        ajax(url, {
            method: 'POST',
            data,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否登录成功
                //
                //
                // 成功

                cb(null, res)

                // 用户名或密码错误
            },
            error (err) {
                cb(err, null)
            }
        })
    },
    // 连接socket
    Vue.prototype.$connect = function (cb) {

        // 从本地cookie中获取token
        // window.cookie
        const url = 'ws://localhost:8080/ws'
        ws.init(url, cb)
    },
    // 注册
    Vue.prototype.$register = function (data, cb) {
        const url = _baseURL + '/signup'
        ajax(url, {
            method: 'POST',
            data,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功

                cb(null, res)
            },
            error (err) {
                cb(err, null)
            }
        })
    }
}

export default request
