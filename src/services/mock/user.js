import Mock from 'mockjs'

export const fetchUserInfo = () => {
  return Mock.mock({
    code: 0,
    msg: 'ok',
    data: {
      'name|1': ['@cname', '@name'],
      username: /[0-9a-z]{6,16}/,
      headIcon: '@dataImage',
      qrIcon: '@dataImage',
      'sex|1': ['男', '女'],
      address: '@city(true)',
      aboutMe: '@csentence',
      myAddrs: []
    }
  })
}
