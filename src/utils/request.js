import axios from 'axios'
import store, { types } from '../store'

const baseURL = process.env.NODE_ENV === 'production' ? 'http://39.108.137.234:30334/api/' : 'http://localhost:30600/api/'

const ax = axios.create({
  baseURL,
  timeout: 10000
})

// window.ax = ax

const request = async options => {
  const { loading, ...opts } = options
  !!loading && store.commit(types.UPDATE_LOADING_STATUS, { loading: true })
  try {
    const response = await ax.request(opts)
    const { code, data } = response.data
    if (code === 0) {
      return data
    } else {
      store.commit(types.UPDATE_INVALID_RESPONSE, { invalidResponse: response.data })
      return Promise.reject(response.data)
    }
  } catch (err) {
    return Promise.reject(err)
  } finally {
    !!loading && store.commit(types.UPDATE_LOADING_STATUS, { loading: false })
  }
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
