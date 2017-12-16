import Mock from 'mockjs'

export const fetchUserInfo = () => {
  return Mock.mock({
    code: 0,
    data: {
      'name|1': ['@cname', '@name'],
      username: /[0-9a-z]{6,16}/,
      headIcon: '@dataImage'
    },
    msg: 'ok'
  })
}
