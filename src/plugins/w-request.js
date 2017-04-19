
const request = (() => {

    const _url = 'http://www.tuling123.com/openapi/api'
    const _key = 'b7879aed88cd4368818f705a59c20de7'

    return {
        // 发送文本
        send (text) {

            return new Promise((resolve, reject) => {

                if (!fetch) {
                    throw '浏览器不支持Fetch!'
                    return
                }

                let data = new FormData()
                data.append('sss', 'ssssssss')
                console.log(data)
                // 开始请求
                fetch(_url, {
                    method: 'POST',
                    // headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'application/json'
                    // },
                    body: data,
                    mode: 'no-cors'
                })
                .then(response => {
                    resolve(response.json())
                })
                .catch(err => {
                    reject(err)
                })

            })
        }
    }
})()

export default request
const send = request.send
export { send }
