import axios from 'axios'
import store, { types } from '../store'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://39.108.137.234:30334/api/' : 'http://localhost:30600/api/'

const ax = axios.create({
  baseURL,
  timeout: 10000
})

// window.ax = ax

const request = options => {
  const { loading, ...opts } = options
  !!loading && store.commit(types.UPDATE_LOADING_STATUS, { loading: true })
  return ax.request(opts).then(res => {
    !!loading && store.commit(types.UPDATE_LOADING_STATUS, { loading: false })
    console.log('response', res)
    if (res.code === 0) { // 正常数据
      return res.data
    } else {              // 无效数据
      store.commit(types.UPDATE_CODE_STATUS, { invalidResponse })
    }
  }, err => {
    !!loading && store.commit(types.UPDATE_LOADING_STATUS, { loading: false })
    console.log('error', err)
  })
}

export const get = request.get = (url, params, loading) => {
  if (typeof params === 'boolean') {
    loading = params
    params = undefined
  }
  return request({
    url,
    loading,
    params
  })
}

export const post = request.post = (url, data, loading) => {
  if (typeof params === 'boolean') {
    loading = data
    data = undefined
  }
  return request({
    url,
    loading,
    data,
    method: 'post'
  })
}

export default request
