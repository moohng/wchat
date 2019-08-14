const userAgent = window.navigator.userAgent

const inWeiXin = () => /MicroMessenger\/([\d.]+)/i.test(userAgent)

export {
  inWeiXin
}
