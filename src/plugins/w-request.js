import { ajax } from 'jquery'

const request = (() => {

    const _url = 'http://www.tuling123.com/openapi/api'
    const _key = 'b7879aed88cd4368818f705a59c20de7'

    return {
        // 发送文本
        send (text) {

            return new Promise((resolve, reject) => {

                ajax(_url, {
                    type: 'POST',
                    data: {
                        key: _key,
                        info: text
                    },
                    dataType: 'json',
                    success (res) {
                        resolve(res)
                    },
                    error (err) {
                        reject(err)
                    }
                })

            })
        }
    }
})()

export default request
const send = request.send
export { send }
