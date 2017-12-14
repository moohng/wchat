import Mock from 'mockjs'

Mock.mock('/', function () {
  return {
    code: 0,
    data: {},
    msg: 'xxxx'
  }
})
