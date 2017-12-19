import Mock from 'mockjs'
import * as api from '../api'
import { fetchUserInfo, fetchUserContact } from './user'

const mock = (api, ...args) => {
  return Mock.mock(new RegExp(api), ...args)
}

// 获取用户信息
mock(api.fetchUserInfo, fetchUserInfo)
// 获取用户联系人
mock(api.fetchUserContact, fetchUserContact)
