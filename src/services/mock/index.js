import Mock from 'mockjs'
import * as api from '../api'
import { fetchUserInfo } from './user'

const mock = (api, ...args) => {
  return Mock.mock(new RegExp(api), ...args)
}

// 获取用户信息
mock(api.fetchUserInfo, fetchUserInfo)
