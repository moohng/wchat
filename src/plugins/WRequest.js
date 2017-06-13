import { ajax } from 'jquery'
import ws from '../websocket'

const request = function(Vue) {

    // const host = '39.108.137.234:28332'
    const host = 'localhost:3000'

    // 登录
    Vue.prototype.$login = request.login = function (data, cb) {

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

        const url = 'http://' + host + '/user/login'
        ajax(url, {
            ...options,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否登录成功
                if (res.code === 10000) {
                    cb(null)
                }
                else {
                    cb(res.status)
                }

            },
            error (err) {
                cb('请求错误')
            }
        })
    }
    // 连接socket
    Vue.prototype.$connect = request.connect = function (cb) {

        const url = 'ws://' + host + '/ws'
        ws.init(url, cb)
    }
    Vue.prototype.$disconnect = request.disconnect = function () {

        ws.close()
    }
    // 注册
    Vue.prototype.$register = request.register = function (data, cb) {
        const url = 'http://' + host + '/user/register'
        ajax(url, {
            method: 'POST',
            data,
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否登录成功
                if (res.code === 10000) {
                    cb(null)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }
    // 注销
    Vue.prototype.$logout = request.logout = function (cb) {
        const url = 'http://' + host + '/user/logout'
        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }

    // 获取在线用户
    Vue.prototype.$getOnline = request.getOnline = function (cb) {

        const url = 'http://' + host + '/user'
        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null, res.users)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }

    // 获取好友列表
    Vue.prototype.$getFriends = request.getFriends = function (cb) {
        const url = 'http://' + host + '/friend'
        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null, res.friends)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }

    /**
     * 获取用户信息
     * @param  {String}   username 要搜索的用户，为空时获取自己的用户信息
     * @param  {Function} cb       获取结果回调
     */
    Vue.prototype.$search = request.search = function (username, cb) {

        let url
        if (typeof username === 'string') {
            url = 'http://' + host + '/user?username=' + username
        }
        else {
            if (typeof username === 'function') {
                cb = username
            }
            url = 'http://' + host + '/user/self'
        }


        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null, res.user)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }

    // 添加好友
    Vue.prototype.$addFriend = request.addFriend = function (username, cb) {
        const url = 'http://' + host + '/friend/add?username=' + username
        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null, res.user)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }

    // 同意添加好友请求
    Vue.prototype.$acceptFriend = request.acceptFriend = function (username, cb) {

        const url = 'http://' + host + '/friend/accept?username=' + username
        ajax(url, {
            method: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success (res) {
                // 判断是否成功
                if (res.code === 10000) {
                    cb(null)
                }
                else {
                    cb(res.status)
                }
            },
            error (err) {
                cb('请求错误')
            }
        })
    }
}

export default request
