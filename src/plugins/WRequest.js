import { ajax } from 'jquery'
import ws from '../websocket'

const request = function(Vue) {

    const _baseURL = 'http://localhost:3000'

    // 登录
    Vue.prototype.$login = function (data, cb) {

        let options = {}
        if (data) {
            options = {
                method: 'POST',
                data
            }
        }
        else {
            options = {
                method: 'GET'
            }
        }

        const url = _baseURL + '/user/login'
        ajax(url, {
            ...options,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否登录成功
                if (res.code === 10000) {
                    cb(null, res.ws_key)
                }
                else {
                    cb('用户名或密码错误')
                }

            },
            error (err) {
                cb('请求错误')
            }
        })
    },
    // 连接socket
    Vue.prototype.$connect = function (ws_key, cb) {

        // 从本地cookie中获取token
        // window.cookie
        const url = 'ws://localhost:8080/ws?ws_key=' + ws_key
        ws.init(url, cb)
    },
    // 注册
    Vue.prototype.$register = function (data, cb) {
        const url = _baseURL + '/user/register'
        ajax(url, {
            method: 'POST',
            data,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否登录成功
                if (res.code === 10000) {
                    cb(null, res.ws_key)
                }
                else {
                    cb('用户名或密码错误')
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    },
    // 注销
    Vue.prototype.$logout = function (cb) {
        const url = _baseURL + '/user/logout'
        ajax(url, {
            method: 'Get',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null, res.ws_key)
                }
                else {
                    cb('用户名或密码错误')
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }
}

export default request
