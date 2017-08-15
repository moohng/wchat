import axios from 'axios'
import ws from '../websocket'
import router from '../router'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://39.108.137.234:30334' : 'http://localhost:3000'

const ax = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    // ...
  },
  withCredentials: true
})

const request = options => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await ax.request(options)
      console.log('response: ', res)
      if (res.code === 10001) {
        // 未登录，跳转到登陆页面
        router.replace({
          name: 'login',
          query: { mode: 'dismiss' }
        })
      } else {
        resolve(res)
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default Vue => {

  // 登录
  Vue.prototype.$login = request.login = data => {
    const url = '/user/login'
    return request({
      url,
      data,
      method: 'post'
    })
  }
  // 注册
  Vue.prototype.$register = request.register = data => {
    const url = '/user/register'
    return request({
      url,
      data,
      method: 'post'
    })
  }
  // 注销
  Vue.prototype.$logout = request.logout = _ => {
      const url = '/user/logout'
      return request({ url })
  }
  // 连接socket
  Vue.prototype.$connect = request.connect = function (cb) {

      const url = process.env.NODE_ENV === 'production' ? 'ws://39.108.137.234:30334/ws' : 'ws://localhost:3000/ws'
      ws.init(url, cb)
  }
  Vue.prototype.$disconnect = request.disconnect = function () {

      ws.close()
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
                if (res.code === 0) {
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
